import { PrismaClient } from "@prisma/client";

// Declare global scope to prevent multiple Prisma instances in dev mode
declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = globalThis.prisma || new PrismaClient();

// Ensure we don't create multiple Prisma instances in development
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}

export default prisma;
