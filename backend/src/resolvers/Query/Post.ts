import { ForbiddenError } from "apollo-server";
import { slug } from '../../utils';

interface Find {
  where: object
  orderBy: string
  take: number
  cursor?: {id: string}
  skip?: number
}

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

export async function post(_, { where }, { prisma }) {
  try {
    return prisma.post.findUnique({
      where
    })
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

export async function posts(_, { filter, orderBy, where, take = 5, pagination }, { prisma }) {
  try {
    const wherePost = filter
      ? {
          ...where,
          OR: [
            { title: { contains: filter, mode: "insensitive" } },
            { content: { contains: filter, mode: "insensitive" } }
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
      if (nextPage > 3) throw new ForbiddenError('Access denied')
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
    return posts
  } catch (e) {
    console.error(e)
    return new Error(e)
  }
}