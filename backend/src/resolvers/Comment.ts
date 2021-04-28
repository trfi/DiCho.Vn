export function post(parent, _, { prisma }) {
  return prisma.comment
    .findUnique({ where: { id: parent.id } })
    .post();
}

export function user(parent, _, { prisma }) {
  return prisma.comment
    .findUnique({ where: { id: parent.id } })
    .user();
}