/*
  Warnings:

  - You are about to drop the column `comments` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_belongToPostId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "comments";

-- DropTable
DROP TABLE "Comment";

-- CreateTable
CREATE TABLE "Like" (
    "id" TEXT NOT NULL,
    "belongToPostId" TEXT NOT NULL,
    "comments" JSONB[],

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserLike" (
    "id" TEXT NOT NULL,
    "commentByUserId" TEXT NOT NULL,
    "comments" TEXT[],

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Like.belongToPostId_unique" ON "Like"("belongToPostId");

-- CreateIndex
CREATE UNIQUE INDEX "UserLike.commentByUserId_unique" ON "UserLike"("commentByUserId");

-- AddForeignKey
ALTER TABLE "Like" ADD FOREIGN KEY ("belongToPostId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLike" ADD FOREIGN KEY ("commentByUserId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
