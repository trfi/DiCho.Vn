function link(parent, args, { prisma }) {
  return prisma.vote
    .findUnique({ where: { id: parent.id } })
    .link();
}

function user(parent, args, { prisma }) {
  return prisma.vote
    .findUnique({ where: { id: parent.id } })
    .user();
}

module.exports = {
  link,
  user
};
