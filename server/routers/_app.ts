import { createTRPCRouter } from "../trpc";
import { songRouter } from "./song";
import { artistRouter } from "./artist";
import { playlistRouter } from "./playlist";
import { paymentRouter } from "./payment";
import { userRouter } from "./user";

export const appRouter = createTRPCRouter({
  song: songRouter,
  artist: artistRouter,
  playlist: playlistRouter,
  payment: paymentRouter,
  user: userRouter,
});

export type AppRouter = typeof appRouter;
