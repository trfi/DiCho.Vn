import { objectId } from "../../utils";
import { ApolloError } from "apollo-server";


export async function follow(_, { followerId }, { prisma, user, pubsub }) {
  try {
    const follow = prisma.follow.create({
      data: {
        user: { 
          connect: { id: user.id } 
        },
        following: {
          connect: { id: followerId }
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
      where: { id: followerId },
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

export async function unfollow(_, { followerId }, { prisma, user, pubsub }) {
  try {
    const follow = prisma.follow.delete({
      where: {
        userId_followingId: {
          userId: user.id,
          followingId: followerId
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
      where: { id: followerId },
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