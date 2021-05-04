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
  const increComment = prisma.post.update({
    where: { id: postId },
    data: {
      commentCount: {
        increment: 1,
      }
    }
  })
  const [comment, post] = await prisma.$transaction([newComment, increComment])
  pubsub.publish('NEW_COMMENT', { comment, post });
  return { comment, post }
}

export async function updateComment(_, { id }, { prisma, pubsub }) {
  const newComment = prisma.comment.update({ where: { id }});
  return newComment;
}

export async function deleteComment(_, { id, postId }, { prisma, pubsub }) {
  const delteteComment = prisma.comment.delete({ where: { id }});
  const decreComment = prisma.post.update({
    where: { id: postId },
    data: {
      commentCount: {
        decrement: 1,
      }
    }
  })
  const [comment, post] = await prisma.$transaction([delteteComment, decreComment])
  return { comment, post }
}