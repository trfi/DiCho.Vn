const regions = require('../data/regions.json')

export function postedBy(parent, _, { prisma }) {
  return prisma.post
    .findUnique({ where: { id: parent.id } })
    .postedBy()
}

export function votes(parent, _, { prisma }) {
  return prisma.post
    .findUnique({ where: { id: parent.id } })
    .votes()
}

export function comments(parent, _, { prisma }) {
  return prisma.post
    .findUnique({ where: { id: parent.id } })
    .comments()
}

export function category(parent, _, { prisma }) {
  return prisma.post
    .findUnique({ where: { id: parent.id } })
    .category()
}

export async function userLiked(parent, _, { prisma, user }) {
  try {
    const result = await prisma.like
    .findUnique({ where: {
      postId_userId: {
        postId: parent.id,
        userId: user.id
      }
    } })
    return Boolean(result)
  } catch (error) {
    console.error(error);
    return false
  }
}

export async function regionName(parent, _, __) {
  try {
    return regions[parent.region].name
  } catch (error) {
    console.error(error);
    return false
  }
}