import { ForbiddenError } from "apollo-server";

interface Find {
  where: object
  orderBy: string
  take: number
  cursor?: { id: string }
  skip?: number
}

export async function category(_, { id }, { prisma }) {
  try {
    return prisma.category.findUnique({
      where: { id }
    })
  } catch (error) {
    console.log(error)
    return new Error(error)
  }
}

export async function categories(_, { filter, orderBy, where, take, pagination }, { prisma }) {
  try {
    const whereCategory = filter
      ? {
        ...where,
        OR: [
          { title: { contains: filter } },
          { content: { contains: filter } }
        ]
      }
      : { ...where };

    const find: Find = {
      where: whereCategory,
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
        let categoryNext
        for (let i = 1; i < nextPage; i++) {
          console.log(find);
          categoryNext = await prisma.category.findMany({
            ...find,
            cursor: { id: cursor },
            select: { id: true }
          })
          if (categoryNext == '') throw new Error("Can't navigate page!")
          cursor = (action == 'n') ? categoryNext[take - 1].id : categoryNext[0].id
          console.log(cursor);
        }
      }
      find.cursor = { id: cursor }
    }

    console.log(find);

    const categories = await prisma.category.findMany(find)
    console.log(categories)
    return categories
  } catch (e) {
    console.error(e);
  }
}