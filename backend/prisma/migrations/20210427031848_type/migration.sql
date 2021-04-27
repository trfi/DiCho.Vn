/*
  Warnings:

  - Added the required column `type` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Type" AS ENUM ('S', 'T', 'B', 'R');

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "type" "Type" NOT NULL;

-- DropEnum
DROP TYPE "Types";
