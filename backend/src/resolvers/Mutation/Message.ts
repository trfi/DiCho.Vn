import { objectId } from "../../utils";
import { ApolloError } from "apollo-server";


export async function sendMessage(_, { to, content }, { prisma, user, pubsub }) {
  try {
    const messageId = objectId()

    const message = prisma.message.create({
      data: {
        id: messageId,
        content
      }
    })
    const messageUser = prisma.messageUser.create({
      data: {
        message: { 
          connect: { id: messageId } 
        },
        sender: { 
          connect: { id: user.id } 
        },
        receiver: { 
          connect: { id: to } 
        }
      }
    })
    return await prisma.$transaction([message, messageUser])[0]
  } catch (e) {
    console.error(e);
  }
}

export async function deleteMessage(_, { id }, { prisma, user, pubsub }) {
  try {
    const where = { msgId: id }
    const isDeleted = await prisma.messageUser.findUnique({
      where,
      select: { senderId: true, receiverId: true, deletedUser: true }
    })
    const { senderId, receiverId, deletedUser } = isDeleted
    if (deletedUser == senderId || deletedUser == receiverId)
    console.log(isDeleted);
    const message = await prisma.messageUser.update({
      where,
      data: {
        deletedUser: user.id
      }
    })
    return message
  } catch (e) {
    console.error(e)
  }
}