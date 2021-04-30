import { objectId } from "../../utils";
import { ValidationError } from "apollo-server";

export async function addPost(_, { input }, { prisma, pubsub, user }) {
  try {
    const { categoryId, ...filteredInput } = input;
    const newPost = await prisma.post.create({
      data: {
        ...filteredInput,
        id: objectId(),
        category : { connect: { id: categoryId } },
        postedBy: { connect: { id: user.id } }
      }
    });
    pubsub.publish('NEW_POST', newPost);
    return newPost;
  } catch (error) {
    console.log(error);
    if (error.code == 'P2025') throw new ValidationError('Category invalid!')
    throw new Error(error)
  }
}

export async function updatePost(_, { id, data }, { prisma }) {
  const updatePost = await prisma.post.update({
    where: { id },
    data,
  })
  return updatePost
}

export async function deletePost(_, { id }, { prisma }) {
  const deletePost = await prisma.post.delete({
    where: { id }
  })
  return deletePost
}