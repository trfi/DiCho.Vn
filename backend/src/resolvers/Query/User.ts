export async function currentUser(_, args, { prisma, user }) {
  return prisma.user.findUnique({
    where: {
      id: user.id
    }
  });
}

export async function user(parent, { where, getFollowed }, { prisma, user }) {
  const userResult = await prisma.user.findUnique({
    where
  })
  if (getFollowed && where.id && user.id !== where.id) {
    const result = await prisma.follow
    .findUnique({ where: {
      userId_followingId: {
        userId: user.id,
        followingId: where.id
      }
    } })
    userResult.isFollowed = Boolean(result)
  }
  return userResult
}

export async function users(_, args, { prisma, user }) {
  try {
    const where = args.filter
      ? {
          OR: [
            { title: { contains: args.filter } },
            { content: { contains: args.filter } }
          ]
        }
      : {};

    const users = await prisma.user.findMany({
      where,
      skip: args.skip,
      take: args.take,
      orderBy: args.orderBy
    });

    const count = await prisma.user.count({ where });

    return {
      count,
      users
    }
  } catch (e) {
    console.error(e);
  }
}
