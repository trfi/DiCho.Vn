export function message(parent, _, { prisma }) {
  return prisma.message
    .findUnique({ where: { id: parent.msgId } })
}
export function sender(parent, _, { prisma }) {
  return prisma.user
    .findUnique({ where: { id: parent.senderId } })
}
export function receiver(parent, _, { prisma }) {
  return prisma.user
    .findUnique({ where: { id: parent.receiverId } })
}