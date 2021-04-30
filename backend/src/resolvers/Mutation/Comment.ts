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

export async function updateComment(_, { id }, { prisma, pubsub }) {
  const newComment = prisma.comment.update({
    where: { id }
  });
  return newComment;
}

export async function deleteComment(_, { id }, { prisma, pubsub }) {
  const newComment = prisma.comment.delete({
    where: { id }
  });
  return newComment;
}