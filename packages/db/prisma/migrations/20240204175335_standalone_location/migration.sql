/*
  Warnings:

  - You are about to drop the column `locationId` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `addressId` on the `Location` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_addressId_fkey";

-- DropIndex
DROP INDEX "Location_addressId_key";

-- AlterTable
ALTER TABLE "Address" DROP COLUMN "locationId";

-- AlterTable
ALTER TABLE "Location" DROP COLUMN "addressId";
