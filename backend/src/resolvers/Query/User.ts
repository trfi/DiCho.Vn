export async function currentUser(_, args, { prisma, user }) {
  return prisma.user.findUnique({
    where: {
      id: user.id
    }
  });
}