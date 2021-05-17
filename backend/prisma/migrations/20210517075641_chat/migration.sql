/*
  Warnings:

  - You are about to drop the `MessageUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MessageUser" DROP CONSTRAINT "MessageUser_msgId_fkey";

-- DropForeignKey
ALTER TABLE "MessageUser" DROP CONSTRAINT "MessageUser_receiverId_fkey";

-- DropForeignKey
ALTER TABLE "MessageUser" DROP CONSTRAINT "MessageUser_senderId_fkey";

-- DropTable
DROP TABLE "MessageUser";

-- CreateTable
CREATE TABLE "Chat" (
    "msgId" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "receiverId" TEXT NOT NULL,
    "lastMsg" TEXT,
    "seen" BOOLEAN NOT NULL DEFAULT false,
    "deletedUser" TEXT NOT NULL DEFAULT E'',
    "unseenNumber" INTEGER NOT NULL DEFAULT 0
);

-- CreateIndex
CREATE UNIQUE INDEX "Chat.msgId_unique" ON "Chat"("msgId");

-- AddForeignKey
ALTER TABLE "Chat" ADD FOREIGN KEY ("msgId") REFERENCES "Message"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD FOREIGN KEY ("receiverId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
