import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const artistRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.prisma.artist.findMany({
      orderBy: { followers: "desc" },
    });
  }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const artist = await ctx.prisma.artist.findUnique({
        where: { id: input.id },
        include: {
          songs: {
            orderBy: { plays: "desc" },
            take: 10,
          },
        },
      });

      if (!artist) {
        throw new Error("Artist not found");
      }

      return artist;
    }),

  getTopArtists: publicProcedure
    .input(z.object({ limit: z.number().min(1).max(20).optional().default(10) }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.artist.findMany({
        take: input.limit,
        orderBy: { followers: "desc" },
      });
    }),
});
