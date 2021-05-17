/*
  Warnings:

  - You are about to drop the column `deletedUser` on the `Message` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Message" DROP COLUMN "deletedUser";
