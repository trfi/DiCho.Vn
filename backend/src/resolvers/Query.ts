export async function feed(parent, args, { prisma }, info) {
  const where = args.filter
    ? {
        OR: [
          { description: { contains: args.filter } },
          { url: { contains: args.filter } }
        ]
      }
    : {};

  const posts = await prisma.post.findMany({
    where,
    skip: args.skip,
    take: args.take,
    orderBy: args.orderBy
  });

  const count = await prisma.post.count({ where });

  return {
    id: 'main-feed',
    posts,
    count
  };
}
