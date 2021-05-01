-- CreateTable
CREATE TABLE "Following" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "followingId" TEXT NOT NULL,

    PRIMARY KEY ("id","userId","followingId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Following.userId_followingId_unique" ON "Following"("userId", "followingId");

-- CreateIndex
CREATE INDEX "Comment.postId_userId_index" ON "Comment"("postId", "userId");

-- CreateIndex
CREATE INDEX "Like.postId_userId_index" ON "Like"("postId", "userId");

-- CreateIndex
CREATE INDEX "Post.id_postedById_categoryId_type_index" ON "Post"("id", "postedById", "categoryId", "type");

-- CreateIndex
CREATE INDEX "User.id_index" ON "User"("id");

-- AddForeignKey
ALTER TABLE "Following" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Following" ADD FOREIGN KEY ("followingId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
