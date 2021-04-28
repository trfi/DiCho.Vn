export async function commentByUser(_, { userId }, { prisma }) {
  const comment = await prisma.comment.findMany({
    where: {
      userId
    }
  });

  console.log(comment);
  console.log(comment.length);

  return comment
}
