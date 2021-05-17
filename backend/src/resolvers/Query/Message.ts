export async function messages(_, { to }, { prisma, user }, info) {
  try {
    const users = [to, user.id]
    const messages =  await prisma.chat.findMany({
      where: {
        senderId: { in: users },
        receiverId: { in: users },
        deletedUser: { not: user.id }
      },
      orderBy: { msgId: 'desc' }
    })
    return messages
  } catch (e) {
    console.error(e);
  }
}