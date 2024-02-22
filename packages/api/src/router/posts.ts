import { CreatePostSchema } from "@acme/validators";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const postRouter = createTRPCRouter({
  all: publicProcedure.query(async ({ ctx }) => {
    const data = await ctx.db.post.findMany({
      // cacheStrategy: { ttl: 60 }
    });
    return data;
  }),

  create: protectedProcedure
    .input(CreatePostSchema)
    .mutation(async ({ ctx, input }) => {
      const authorId = ctx.user.id!;
      return ctx.db.post.create({
        data: { authorId, content: input.content },
      });
    }),
});
