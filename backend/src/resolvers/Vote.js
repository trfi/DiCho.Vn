function post(parent, args, { prisma }) {
  return prisma.vote
    .findUnique({ where: { id: parent.id } })
    .post();
}

function user(parent, args, { prisma }) {
  return prisma.vote
    .findUnique({ where: { id: parent.id } })
    .user();
}

module.exports = {
  post,
  user
};
