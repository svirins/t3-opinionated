import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const testRouter = createTRPCRouter({
  hello: publicProcedure.query(({ ctx }) => {
    return {
      greeting: `hello! ${ctx.user}`,
    };
  }),
  protectedHello: protectedProcedure.query(({ ctx }) => {
    return {
      secret: `${ctx.user.id} is using a protected procedure`,
    };
  }),
});
