export async function addCategory(_, { input }, { prisma }) {
  if (input.children && typeof(input.children) == 'string') input.children = JSON.parse(input.children)
  console.log(input);
  const newCategory = await prisma.category.create({
    data: {
      ...input
    }
  });
  return newCategory;
}

export async function updateCategory(_, { where, data }, { prisma }) {
  const updateCategory = await prisma.category.update({
    where,
    data,
  })
  return updateCategory
}

export async function deleteCategory(_, { where }, { prisma }) {
  const deleteCategory = await prisma.category.delete({
    where
  })
  return deleteCategory
}