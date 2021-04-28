import { objectId } from "../../utils";


export async function addComment(_, { content, postId }, { prisma, user, pubsub }) {
  const newComment = prisma.comment.create({
    data: {
      id: objectId(),
      content,
      user: { connect: { id: user.id } },
      post: { connect: { id: postId } }
    }
  });
  pubsub.publish('NEW_COMMENT', newComment);

  return newComment;
}