/*
  Warnings:

  - A unique constraint covering the columns `[belongToPostId]` on the table `Comment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `belongToPostId` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_id_fkey";

-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "belongToPostId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Comment.belongToPostId_unique" ON "Comment"("belongToPostId");

-- AddForeignKey
ALTER TABLE "Comment" ADD FOREIGN KEY ("belongToPostId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
