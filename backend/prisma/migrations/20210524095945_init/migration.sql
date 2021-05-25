/*
  Warnings:

  - The primary key for the `Follow` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[followingId]` on the table `Follow` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Follow.userId_followingId_unique";

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "thumbnail" TEXT;

-- AlterTable
ALTER TABLE "Follow" DROP CONSTRAINT "Follow_pkey",
ADD PRIMARY KEY ("followingId");

-- CreateIndex
CREATE UNIQUE INDEX "Follow.followingId_unique" ON "Follow"("followingId");
