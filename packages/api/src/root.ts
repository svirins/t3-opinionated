import { groupRouter } from "./router/group";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  group: groupRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
