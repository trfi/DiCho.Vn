-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "parent" TEXT,
ADD COLUMN     "children" JSONB;
