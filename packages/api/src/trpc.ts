import { currentUser } from "@clerk/nextjs";
import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
import { ZodError } from "zod";

import { db } from "@acme/db";

// 1. CONTEXT
export const createTRPCContext = async (opts: { headers: Headers }) => {
  const user = await currentUser();
  const source = opts.headers.get("x-trpc-source") ?? "unknown";
  console.log(">>> tRPC Request from", source, "by", user?.id);
  return {
    db,
    user,
    ...opts,
  };
};

// 2. INITIALIZATION
const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter: ({ shape, error }) => ({
    ...shape,
    data: {
      ...shape.data,
      zodError: error.cause instanceof ZodError ? error.cause.flatten() : null,
    },
  }),
});

// check if the user is signed in, otherwise through a UNAUTHORIZED CODE
const enforceUserIsAuthed = t.middleware(({ next, ctx }) => {
  if (!ctx.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  return next({
    ctx: {
      user: ctx.user,
    },
  });
});

// Create a server-side caller
export const createCallerFactory = t.createCallerFactory;

// 3. ROUTER & PROCEDURES
export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(enforceUserIsAuthed);
