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
    console.error(e)
  }
}

export async function inboxs(_, args, { prisma, user }, __) {
  try {
    const messages =  await prisma.chat.findMany({
      where: {
        OR: [
        { senderId: user.id },
        { receiverId: user.id }
      ]
      },
      take: 5,
      select: {
        message: {
          select: {
            content: true
          }
        },
        sender: {
          select: {
            name: true
          }
        },
        receiver: {
          select: {
            name: true
          }
        },
        lastMsg: true
      },
      distinct: ['senderId', 'receiverId'],
      orderBy: { msgId: 'desc' }
    })
    return messages
  } catch (e) {
    console.error(e)
  }
}