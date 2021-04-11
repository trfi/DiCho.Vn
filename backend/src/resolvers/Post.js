function postedBy(parent, args, { prisma }) {
  return prisma.post
    .findUnique({ where: { id: parent.id } })
    .postedBy();
}

function votes(parent, args, { prisma }) {
  return prisma.post
    .findUnique({ where: { id: parent.id } })
    .votes();
}

module.exports = {
  postedBy,
  votes
};
