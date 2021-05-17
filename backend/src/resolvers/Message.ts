export function messageUser(parent, _, { prisma }) {
  return prisma.messageUser
  .findUnique({ where: { msgId: parent.id } })
}