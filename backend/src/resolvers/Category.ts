export function posts(parent, _, { prisma }) {
  return prisma.category
    .findUnique({ where: { id: parent.id } })
    .posts()
}