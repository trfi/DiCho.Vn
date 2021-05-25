import { objectId } from "../../utils";
import { ApolloError } from "apollo-server";


export async function follow(_, { id }, { prisma, user, pubsub }) {
  try {
    const follow = prisma.follow.create({
      data: {
        user: { 
          connect: { id: user.id } 
        },
        following: {
          connect: { id: id }
        }
      }
    })
    const increFollowing = prisma.user.update({
      where: { id: user.id },
      data: {
        followingCount: {
          increment: 1,
        }
      }
    })
    const increFollower = prisma.user.update({
      where: { id: id },
      data: {
        followerCount: {
          increment: 1,
        }
      }
    })
    const [_, follower, following] = await prisma.$transaction([follow, increFollowing, increFollower])
    // pubsub.publish('NEW_LIKE', follow)
    return { follower, following }
  } catch (error) {
    console.log(error);
    throw new ApolloError('Follow error!')
  }
}

export async function unfollow(_, { id }, { prisma, user, pubsub }) {
  try {
    const follow = prisma.follow.delete({
      where: {
        userId_followingId: {
          userId: user.id,
          followingId: id
        }
      }
    })
    const decreFollowing = prisma.user.update({
      where: { id: user.id },
      data: {
        followingCount: {
          decrement: 1,
        }
      }
    })
    const decreFollower = prisma.user.update({
      where: { id: id },
      data: {
        followerCount: {
          decrement: 1,
        }
      }
    })
    const [_, follower, following] = await prisma.$transaction([follow, decreFollowing, decreFollower])
    return { follower, following }
  } catch (error) {
    console.log(error);
    throw new ApolloError('Unfollow error!')
  }
}