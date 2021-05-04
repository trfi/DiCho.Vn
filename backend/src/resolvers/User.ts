export function posts(parent, args, { prisma }) {
  return prisma.user
    .findUnique({ where: { id: parent.id } })
    .posts();
}
export function followers(parent, args, { prisma }) {
  return prisma.user
    .findUnique({ where: { id: parent.id } })
    .users();
}
export function following(parent, args, { prisma }) {
  return prisma.user
    .findUnique({ where: { id: parent.id } })
    .users();
}