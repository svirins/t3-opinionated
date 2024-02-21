import type { Prisma } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

import { groupsData } from "./data";

const prisma = new PrismaClient({ log: ["error", "query"] });

async function createGroup(data: Prisma.GroupCreateInput) {
  return prisma.group.create({ data });
}

async function seedGroups(groupsData: Prisma.GroupCreateInput[]) {
  for (const seedElement of groupsData) {
    try {
      const result = await createGroup(seedElement);
      console.log("Created group: ", result);
    } catch (error) {
      console.error("Error creating group: ", error);
    }
  }
}

(async () => {
  console.log("Seeding groups...");
  await seedGroups(groupsData);
})();
