import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const testRouter = createTRPCRouter({
  hello: publicProcedure.query(({ ctx }) => {
    return {
      greeting: `hello! ${ctx.auth?.userId}`,
    };
  }),
  protectedHello: protectedProcedure.query(({ ctx }) => {
    return {
      secret: `${ctx.auth?.userId} is using a protected procedure`,
    };
  }),
});
