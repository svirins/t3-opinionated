import { PrismaClient } from "@prisma/client";

// import { withAccelerate } from "@prisma/extension-accelerate";

const prismaClientSingleton = () => {
  // return new PrismaClient({ log: ["error"] }).$extends(withAccelerate());
  return new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

// we have to be careful here because we don't want to create a new PrismaClient instance in the API route

// we are exporting global prisma instance here.
// I can be used in every place where we import prisma
export const db = globalThis.prisma ?? prismaClientSingleton();

// we are exporting all prisma types here
export * from "@prisma/client";

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
