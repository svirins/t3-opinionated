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
import { getAuth } from "@clerk/nextjs/server";
import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
import { ZodError } from "zod";

import { prisma } from "@acme/db";

interface AuthContext {
  auth: SignedInAuthObject | SignedOutAuthObject;
}

// 1. CONTEXT

export const createTRPCContext = async ({
  headers,
  auth,
}: {
  headers: Headers;
  auth: AuthContext;
}) => {
  const source = headers.get("x-trpc-source") ?? "unknown";
  // const session = auth ?? (getAuth(opts.req));
  console.log(">>> tRPC Request from", source, "by", auth.auth?.user);

  return {
    auth,
    prisma,
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

const isAuthed = t.middleware(({ next, ctx }) => {
  if (!ctx.auth.auth?.user?.id) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  return next({
    ctx: {
      auth: ctx.auth,
    },
  });
});

// Create a server-side caller

export const createCallerFactory = t.createCallerFactory;

// 3. ROUTER & PROCEDURE

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(isAuthed);
