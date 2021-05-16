/*
  Warnings:

  - You are about to drop the column `messageId` on the `MessageUser` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[msgId]` on the table `MessageUser` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `deletedUser` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `msgId` to the `MessageUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastMsg` to the `MessageUser` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MessageUser" DROP CONSTRAINT "MessageUser_messageId_fkey";

-- DropIndex
DROP INDEX "MessageUser.messageId_unique";

-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "deletedUser" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "MessageUser" DROP COLUMN "messageId",
ADD COLUMN     "msgId" TEXT NOT NULL,
ADD COLUMN     "lastMsg" TEXT NOT NULL,
ADD COLUMN     "unseenNumber" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "MessageUser.msgId_unique" ON "MessageUser"("msgId");

-- AddForeignKey
ALTER TABLE "MessageUser" ADD FOREIGN KEY ("msgId") REFERENCES "Message"("id") ON DELETE CASCADE ON UPDATE CASCADE;
