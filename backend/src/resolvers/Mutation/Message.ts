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
    const chat = prisma.chat.create({
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
    const result = await prisma.$transaction([message, chat])
    return result[1]
  } catch (e) {
    console.error(e);
  }
}

export async function deleteMessage(_, { id }, { prisma, user, pubsub }) {
  try {
    const where = { msgId: id }
    const isDeleted = await prisma.chat.findUnique({
      where,
      select: { senderId: true, receiverId: true, deletedUser: true }
    })
    const { senderId, receiverId, deletedUser } = isDeleted
    console.log(isDeleted);
    if ((senderId === user.id && deletedUser === receiverId) 
    || (receiverId === user.id && deletedUser === senderId)) {
      const deletedMessage = await prisma.message.delete({
        where: { id }
      })
      console.log(deletedMessage)
      return deletedMessage
    }
    else {
      const message = await prisma.chat.update({
        where,
        data: {
          deletedUser: user.id
        }
      })
      return message
    }
  } catch (e) {
    console.error(e)
  }
}