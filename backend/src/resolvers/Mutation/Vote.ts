export async function vote(parent, args, { prisma, userId, pubsub }, _) {
  const vote = await prisma.vote.findUnique({
    where: {
      postId_userId: {
        postId: args.postId,
        userId: userId
      }
    }
  });

  if (Boolean(vote)) {
    throw new Error(
      `Already voted for post: ${args.postId}`
    );
  }

  const newVote = prisma.vote.create({
    data: {
      user: { connect: { id: userId } },
      post: { connect: { id: args.postId } }
    }
  });
  pubsub.publish('NEW_VOTE', newVote);

  return newVote;
}