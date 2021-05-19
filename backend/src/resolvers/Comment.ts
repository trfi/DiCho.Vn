export function post(parent, _, { prisma }) {
  return prisma.comment
    .findUnique({ where: { id: parent.id } })
    .post();
}

export function user(parent, _, { prisma }) {
  return prisma.comment
    .findUnique({ where: { id: parent.id } })
    .user();
}

const dateFromObjectId = function (objectId) {
	return new Date(parseInt(objectId.substring(0, 8), 16) * 1000).toLocaleString('vi-VI')
}

export const created = (parent, _, __) => dateFromObjectId(parent.id)