export function postedBy(parent, args, { prisma }) {
  return prisma.post
    .findUnique({ where: { id: parent.id } })
    .postedBy();
}

export function votes(parent, args, { prisma }) {
  return prisma.post
    .findUnique({ where: { id: parent.id } })
    .votes();
}