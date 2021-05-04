/*
  Warnings:

  - Made the column `likeCount` on table `Post` required. This step will fail if there are existing NULL values in that column.
  - Made the column `commentCount` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "likeCount" SET NOT NULL,
ALTER COLUMN "likeCount" SET DEFAULT 0,
ALTER COLUMN "commentCount" SET NOT NULL,
ALTER COLUMN "commentCount" SET DEFAULT 0;
