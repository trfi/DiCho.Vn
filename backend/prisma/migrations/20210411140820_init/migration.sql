-- CreateEnum
CREATE TYPE "PostDetail" AS ENUM ('images', 'content', 'address');

-- CreateEnum
CREATE TYPE "Params" AS ENUM ('acreage', 'rooms');

-- CreateEnum
CREATE TYPE "Types" AS ENUM ('S', 'B', 'T', 'R');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('M', 'F', 'O');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'MODERATOR');

-- CreateTable
CREATE TABLE "Vote" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneVerified" BOOLEAN DEFAULT false,
    "email" TEXT,
    "emailVerified" BOOLEAN,
    "name" TEXT,
    "username" TEXT,
    "avatar" TEXT,
    "gender" "Gender",
    "birthday" TIMESTAMP(3),
    "address" TEXT,
    "role" "Role",
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "broker" BOOLEAN NOT NULL DEFAULT false,
    "params" JSONB,
    "region" INTEGER NOT NULL,
    "area" INTEGER NOT NULL,
    "ward" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "postDetail" JSONB,
    "postedById" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "path" TEXT,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Vote.postId_userId_unique" ON "Vote"("postId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "User.phone_unique" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Vote" ADD FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD FOREIGN KEY ("postedById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
