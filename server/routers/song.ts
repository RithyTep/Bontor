import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const songRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).optional().default(20),
        cursor: z.string().optional(),
        tags: z.array(z.string()).optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const songs = await ctx.prisma.song.findMany({
        take: input.limit + 1,
        cursor: input.cursor ? { id: input.cursor } : undefined,
        where: input.tags?.length
          ? { tags: { hasSome: input.tags } }
          : undefined,
        orderBy: { createdAt: "desc" },
        include: { artist: true },
      });

      let nextCursor: typeof input.cursor | undefined = undefined;
      if (songs.length > input.limit) {
        const nextItem = songs.pop();
        nextCursor = nextItem!.id;
      }

      return { songs, nextCursor };
    }),

  getTrending: publicProcedure
    .input(z.object({ limit: z.number().min(1).max(20).optional().default(10) }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.song.findMany({
        take: input.limit,
        orderBy: { plays: "desc" },
        include: { artist: true },
      });
    }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const song = await ctx.prisma.song.findUnique({
        where: { id: input.id },
        include: { artist: true },
      });

      if (!song) {
        throw new Error("Song not found");
      }

      return song;
    }),

  search: publicProcedure
    .input(z.object({ query: z.string().min(1) }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.song.findMany({
        where: {
          OR: [
            { title: { contains: input.query, mode: "insensitive" } },
            { artist: { name: { contains: input.query, mode: "insensitive" } } },
          ],
        },
        include: { artist: true },
        take: 20,
      });
    }),

  incrementPlays: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.song.update({
        where: { id: input.id },
        data: { plays: { increment: 1 } },
      });
    }),
});
