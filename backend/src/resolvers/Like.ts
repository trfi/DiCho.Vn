export function post(parent, _, { prisma }) {
  return prisma.like
    .findUnique({ where: { id: parent.id } })
    .post();
}

export function user(parent, _, { prisma }) {
  return prisma.like
    .findUnique({ where: { id: parent.id } })
    .user();
}