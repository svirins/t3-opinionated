import { Prisma } from "@acme/db";
import { CreatePostSchema } from "@acme/validators";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const postRouter = createTRPCRouter({
  all: publicProcedure.query(async ({ ctx }) => {
    // !! do we even need to check Prisma errors here?
    // or it can be handled by the Pisma error log handler?
    try {
      const data = await ctx.prisma.post.findMany({
        // cacheStrategy: { ttl: 60 }
      });
      return data;
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        console.error(`DB error : ${JSON.stringify(e)}`);
      } else {
        console.error(`Unknown DB error: `, e);
      }
    }
  }),

  create: protectedProcedure
    .input(CreatePostSchema)
    .mutation(async ({ ctx, input }) => {
      const authorId = ctx.auth.userId!;
      return ctx.prisma.post.create({
        data: { authorId, content: input.content },
      });
    }),
});
