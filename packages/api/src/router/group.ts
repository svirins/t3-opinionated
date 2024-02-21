import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const groupRouter = createTRPCRouter({
  all: publicProcedure.query(async ({ ctx }) => {
    const groups = await ctx.prisma.group.findMany({
      include: {
        address: {
          include: {
            location: true,
          },
        },
        days: {
          include: {
            meetings: true,
          },
        },
      },
      orderBy: [{ createdAt: "desc" }],
    });
    return groups;
  }),

  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const group = await ctx.prisma.group.findUnique({
        where: {
          id: input.id,
        },
        include: {
          address: {
            include: {
              location: true,
            },
          },
          days: {
            include: {
              meetings: true,
            },
          },
        },
      });
      return group;
    }),

  byName: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(async ({ ctx, input }) => {
      const group = await ctx.prisma.group.findUnique({
        where: {
          name: input.name,
        },
        include: {
          address: {
            include: {
              location: true,
            },
          },
          days: {
            include: {
              meetings: true,
            },
          },
        },
      });
      return group;
    }),
});
