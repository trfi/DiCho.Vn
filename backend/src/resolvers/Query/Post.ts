export async function feed(_, args, { prisma }, info) {
  const where = args.filter
    ? {
        OR: [
          { title: { contains: args.filter } },
          { content: { contains: args.filter } }
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

interface Find {
  where: object
  orderBy: string
  take: number
  cursor?: {id: string}
  skip?: number
}

interface Pagination {
  nextCursor: string
  previousCursor: string
  action: string
  nextPage: number
}

export async function post(_, { filter, orderBy, where, take = 5, pagination }, { prisma }) {
  const wherePost = filter
    ? {
        ...where,
        OR: [
          { title: { contains: filter } },
          { content: { contains: filter } }
        ]
      }
    : { ...where };
  
  const find: Find = {
    where: wherePost,
    orderBy: orderBy,
    take
  }

  if (pagination) {
    const { nextCursor, previousCursor, action, nextPage = 1 } = pagination
    if (nextPage > 3) throw new Error('X')
    let cursor: string = (action == 'n') ? nextCursor : previousCursor
    find.skip = 1
    find.take = (action == 'n') ? take : (action == 'p') ? -take : take
    if (nextPage > 1) {
      let postNext
      for (let i = 1; i < nextPage; i++) {
        console.log(find);
        postNext = await prisma.post.findMany({
          ...find,
          cursor: { id : cursor },
          select: { id: true }
        })
        if (postNext == '') throw new Error("Can't navigate page!")
        cursor = (action == 'n') ? postNext[take-1].id : postNext[0].id
        console.log(cursor);
      }
    }
    find.cursor = { id : cursor }
  }
  
  console.log(find);

  const posts = await prisma.post.findMany(find);
  return {
    count: Math.abs(take),
    posts
  };
}