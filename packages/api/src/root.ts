import { postRouter } from "./router/posts";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  posts: postRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
