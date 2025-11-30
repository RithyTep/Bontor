import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { generateKHQRPayload, generateQRCodeUrl, verifyKHQRPayment } from "@/lib/khqr";

export const paymentRouter = createTRPCRouter({
  createVIPPayment: protectedProcedure
    .input(
      z.object({
        plan: z.enum(["monthly", "yearly"]),
        currency: z.enum(["KHR", "USD"]).default("USD"),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const amount = input.plan === "monthly" ? 4.99 : 49.99;

      const payment = await ctx.prisma.payment.create({
        data: {
          userId: ctx.user.id!,
          amount,
          provider: "KHQR",
          status: "PENDING",
        },
      });

      const payload = generateKHQRPayload({
        merchantName: "Bontor Music",
        merchantCity: "Phnom Penh",
        amount,
        currency: input.currency,
        transactionId: payment.id,
      });

      const qrCodeUrl = generateQRCodeUrl(payload);

      return {
        paymentId: payment.id,
        qrCodeUrl,
        amount,
        currency: input.currency,
      };
    }),

  verifyPayment: protectedProcedure
    .input(z.object({ paymentId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const payment = await ctx.prisma.payment.findUnique({
        where: { id: input.paymentId },
      });

      if (!payment || payment.userId !== ctx.user.id) {
        throw new Error("Payment not found");
      }

      const verified = await verifyKHQRPayment(payment.id);

      if (verified) {
        await ctx.prisma.payment.update({
          where: { id: payment.id },
          data: { status: "SUCCESS" },
        });

        // Update user VIP status
        const vipDuration = payment.amount > 10 ? 365 : 30; // yearly vs monthly
        const vipExpiry = new Date();
        vipExpiry.setDate(vipExpiry.getDate() + vipDuration);

        await ctx.prisma.user.update({
          where: { id: ctx.user.id },
          data: {
            isVip: true,
            vipExpiry,
          },
        });

        return { success: true, vipExpiry };
      }

      return { success: false };
    }),

  getHistory: protectedProcedure.query(async ({ ctx }) => {
    return ctx.prisma.payment.findMany({
      where: { userId: ctx.user.id },
      orderBy: { createdAt: "desc" },
    });
  }),
});
