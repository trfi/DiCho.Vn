export function posts(parent, _, { prisma }) {
  return prisma.user
    .findUnique({ where: { id: parent.id } })
    .posts()
}
export function followers(parent, _, { prisma }) {
  return prisma.user
    .findUnique({ where: { id: parent.id } })
    .users()
}
export function following(parent, _, { prisma }) {
  return prisma.user
    .findUnique({ where: { id: parent.id } })
    .users()
}
export function likes(parent, _, { prisma }) {
  return prisma.user
    .findUnique({ where: { id: parent.id } })
    .posts()
}
export function comments(parent, _, { prisma }) {
  return prisma.user
    .findUnique({ where: { id: parent.id } })
    .comments()
}