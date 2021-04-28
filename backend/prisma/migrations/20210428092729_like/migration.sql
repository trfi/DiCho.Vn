/*
  Warnings:

  - You are about to drop the column `comments` on the `Like` table. All the data in the column will be lost.
  - You are about to drop the column `comments` on the `UserLike` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Like" DROP COLUMN "comments",
ADD COLUMN     "likes" JSONB[];

-- AlterTable
ALTER TABLE "UserLike" DROP COLUMN "comments",
ADD COLUMN     "likes" TEXT[];
