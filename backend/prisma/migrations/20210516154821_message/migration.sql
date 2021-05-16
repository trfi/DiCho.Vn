/*
  Warnings:

  - Made the column `deletedUser` on table `MessageUser` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "MessageUser" ALTER COLUMN "deletedUser" SET NOT NULL,
ALTER COLUMN "deletedUser" SET DEFAULT E'';
