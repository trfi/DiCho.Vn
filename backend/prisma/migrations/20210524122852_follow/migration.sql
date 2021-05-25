/*
  Warnings:

  - The primary key for the `Follow` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Follow" DROP CONSTRAINT "Follow_pkey";

-- CreateIndex
CREATE INDEX "Follow.userId_followingId_index" ON "Follow"("userId", "followingId");
