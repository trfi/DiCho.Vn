/*
  Warnings:

  - You are about to drop the column `belongToPostId` on the `Comment` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_belongToPostId_fkey";

-- DropIndex
DROP INDEX "Comment_belongToPostId_unique";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "belongToPostId";

-- AddForeignKey
ALTER TABLE "Comment" ADD FOREIGN KEY ("id") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
