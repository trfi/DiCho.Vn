export function chat(parent, _, { prisma }) {
  return prisma.chat
  .findUnique({ where: { msgId: parent.id } })
}