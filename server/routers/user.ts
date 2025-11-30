import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  getProfile: protectedProcedure.query(async ({ ctx }) => {
    return ctx.prisma.user.findUnique({
      where: { id: ctx.user.id },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        isVip: true,
        vipExpiry: true,
        createdAt: true,
      },
    });
  }),

  updateProfile: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1).max(100).optional(),
        image: z.string().url().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.user.update({
        where: { id: ctx.user.id },
        data: input,
      });
    }),

  getDownloads: protectedProcedure.query(async ({ ctx }) => {
    return ctx.prisma.download.findMany({
      where: { userId: ctx.user.id },
      include: { song: { include: { artist: true } } },
      orderBy: { createdAt: "desc" },
    });
  }),
});
