/*
  Warnings:

  - You are about to drop the column `type` on the `Category` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "type",
ADD COLUMN     "types" "Type"[];
