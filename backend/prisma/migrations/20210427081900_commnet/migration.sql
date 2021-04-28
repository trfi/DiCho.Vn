/*
  Warnings:

  - You are about to drop the column `content` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `commentInPostId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `commentByUserId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `created` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `updated` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `like` on the `Post` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[belongToPostId]` on the table `Comment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `belongToPostId` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comments` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comments` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_commentByUserId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_commentInPostId_fkey";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "content",
DROP COLUMN "commentInPostId",
DROP COLUMN "commentByUserId",
DROP COLUMN "created",
DROP COLUMN "updated",
ADD COLUMN     "belongToPostId" TEXT NOT NULL,
ADD COLUMN     "comments" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "like",
ADD COLUMN     "likeCount" INTEGER,
ADD COLUMN     "commentCount" INTEGER;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "comments" JSONB NOT NULL;

-- CreateTable
CREATE TABLE "CommentDetail" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "commentInPostId" TEXT NOT NULL,
    "commentByUserId" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Comment_belongToPostId_unique" ON "Comment"("belongToPostId");

-- AddForeignKey
ALTER TABLE "Comment" ADD FOREIGN KEY ("belongToPostId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
