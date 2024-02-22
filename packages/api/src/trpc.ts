/**
 * YOU PROBABLY DON'T NEED TO EDIT THIS FILE, UNLESS:
 * 1. You want to modify request context (see Part 1)
 * 2. You want to create a new middleware or type of procedure (see Part 3)
 *
 * tl;dr - this is where all the tRPC server stuff is created and plugged in.
 * The pieces you will need to use are documented accordingly near the end
 */
import type {
  SignedInAuthObject,
  SignedOutAuthObject,
} from "@clerk/nextjs/api";
import type { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { getAuth } from "@clerk/nextjs/server";
import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
import { ZodError } from "zod";

import { prisma } from "@acme/db";

interface AuthContext {
  auth: SignedInAuthObject | SignedOutAuthObject;
}

// 1. CONTEXT
export const createTRPCContext = async (opts: CreateNextContextOptions) => {
  const { req } = opts;
  const session = getAuth(req);

  const userId = session.userId;
  // const source = headers.get("x-trpc-source") ?? "unknown";
  // const session = auth ?? (getAuth(opts.req));
  // console.log(">>> tRPC Request from", source, "by", auth.auth?.user);

  return {
    prisma,
    userId,
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
  if (!ctx.userId) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  return next({
    ctx: {
      auth: ctx.userId,
    },
  });
});

// Create a server-side caller

export const createCallerFactory = t.createCallerFactory;

// 3. ROUTER & PROCEDURE

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(enforceUserIsAuthed);
