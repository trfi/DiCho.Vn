export async function currentUser(_, args, { prisma, user }) {
  return prisma.user.findUnique({
    where: {
      id: user.id
    }
  });
}

export async function users(_, args, { prisma, user }) {
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
}
