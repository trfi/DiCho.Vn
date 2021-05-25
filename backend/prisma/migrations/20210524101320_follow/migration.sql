/*
  Warnings:

  - A unique constraint covering the columns `[userId,followingId]` on the table `Follow` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Follow.followingId_unique";

-- CreateIndex
CREATE UNIQUE INDEX "Follow.userId_followingId_unique" ON "Follow"("userId", "followingId");
