export function post(parent, args, { prisma }) {
  return prisma.vote
    .findUnique({ where: { id: parent.id } })
    .post();
}

export function user(parent, args, { prisma }) {
  return prisma.vote
    .findUnique({ where: { id: parent.id } })
    .user();
}