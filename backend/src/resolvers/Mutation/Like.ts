import { objectId } from "../../utils";


export async function like(_, { postId }, { prisma, user, pubsub }) {
  let like = null;
  try {
    like = await prisma.like.create({
      data: {
        id: objectId(),
        user: { connect: { id: user.id } },
        post: { connect: { id: postId } }
      }
    });
    pubsub.publish('NEW_LIKE', like);
    return true;
  } catch (error) {
    console.log(error);
    return false
  }
}

export async function unlike(_, { postId }, { prisma, user, pubsub }) {
  let like = null;
  const where = {
    postId_userId: {
      postId: postId,
      userId: user.id
    }
  }
  
  try {
    like = await prisma.like.delete({ where })
    console.log(like);
    return true;
  } catch (error) {
    console.log(error);
    return false
  }
}