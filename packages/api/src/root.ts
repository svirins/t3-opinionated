import { postRouter } from "./router/posts";
import { testRouter } from "./router/test";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  posts: postRouter,
  test: testRouter,
});

export type AppRouter = typeof appRouter;
