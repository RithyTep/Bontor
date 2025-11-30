import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const playlistRouter = createTRPCRouter({
  getOfficial: publicProcedure.query(async ({ ctx }) => {
    return ctx.prisma.playlist.findMany({
      where: { isOfficial: true },
      include: {
        songs: {
          include: { song: { include: { artist: true } } },
          orderBy: { order: "asc" },
        },
      },
    });
  }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.playlist.findUnique({
        where: { id: input.id },
        include: {
          owner: { select: { id: true, name: true, image: true } },
          songs: {
            include: { song: { include: { artist: true } } },
            orderBy: { order: "asc" },
          },
        },
      });
    }),

  getUserPlaylists: protectedProcedure.query(async ({ ctx }) => {
    return ctx.prisma.playlist.findMany({
      where: { ownerId: ctx.user.id },
      include: {
        songs: { take: 4, include: { song: true } },
      },
    });
  }),

  create: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1).max(100),
        description: z.string().max(500).optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.playlist.create({
        data: {
          name: input.name,
          description: input.description,
          ownerId: ctx.user.id!,
        },
      });
    }),

  addSong: protectedProcedure
    .input(
      z.object({
        playlistId: z.string(),
        songId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const playlist = await ctx.prisma.playlist.findUnique({
        where: { id: input.playlistId },
        include: { songs: true },
      });

      if (!playlist || playlist.ownerId !== ctx.user.id) {
        throw new Error("Playlist not found or unauthorized");
      }

      const maxOrder = playlist.songs.reduce((max, s) => Math.max(max, s.order), 0);

      return ctx.prisma.playlistSong.create({
        data: {
          playlistId: input.playlistId,
          songId: input.songId,
          order: maxOrder + 1,
        },
      });
    }),

  removeSong: protectedProcedure
    .input(
      z.object({
        playlistId: z.string(),
        songId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const playlist = await ctx.prisma.playlist.findUnique({
        where: { id: input.playlistId },
      });

      if (!playlist || playlist.ownerId !== ctx.user.id) {
        throw new Error("Playlist not found or unauthorized");
      }

      return ctx.prisma.playlistSong.delete({
        where: {
          playlistId_songId: {
            playlistId: input.playlistId,
            songId: input.songId,
          },
        },
      });
    }),
});
