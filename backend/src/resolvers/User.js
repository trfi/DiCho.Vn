function posts(parent, args, { prisma }) {
  return prisma.user
    .findUnique({ where: { id: parent.id } })
    .posts();
}

module.exports = {
  posts
};
