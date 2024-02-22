import { CreatePostSchema } from "@acme/validators";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const postRouter = createTRPCRouter({
  all: publicProcedure.query(async ({ ctx }) => {
    const data = await ctx.prisma.post.findMany({
      // cacheStrategy: { ttl: 60 }
    });
    return data;
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
