/*
  Warnings:

  - You are about to drop the column `published` on the `Book` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Author" ADD COLUMN     "country" TEXT,
ALTER COLUMN "bio" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "published",
ALTER COLUMN "summary" DROP NOT NULL;
