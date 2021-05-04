import { objectId } from "../../utils";


export async function like(_, { postId }, { prisma, user, pubsub }) {
  try {
    const like = prisma.like.create({
      data: {
        user: { connect: { id: user.id } },
        post: {
          connect: { id: postId }
        }
      }
    });
    const increLike = prisma.post.update({
      where: { id: postId },
      data: {
        likeCount: {
          increment: 1,
        }
      }
    })
    const [_, post] = await prisma.$transaction([like, increLike])
    pubsub.publish('NEW_LIKE', like);
    return { success: true, post }
  } catch (error) {
    console.log(error);
    return { success: false }
  }
}

export async function unlike(_, { postId }, { prisma, user, pubsub }) {
  try {
    const unlike = prisma.like.delete({
      where: {
        postId_userId: {
          postId: postId,
          userId: user.id
        }
      }
    })
    const decreLike = prisma.post.update({
      where: { id: postId },
      data: {
        likeCount: {
          decrement: 1,
        }
      }
    })
    const [_, post] = await prisma.$transaction([unlike, decreLike])
    return { success: true, post }
  } catch (error) {
    return { success: false }
  }
}