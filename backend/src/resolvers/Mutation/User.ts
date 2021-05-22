import { Crypto, objectId } from "../../utils";
const jwt = require('jsonwebtoken');
import { UserInputError, ValidationError, AuthenticationError } from 'apollo-server';


export async function signup(_, args, context) {
  const password = Crypto.encrypt(args.password);
  const user = await context.prisma.user.create({
    data: { ...args, id: objectId(), password }
  });

  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '90d' });

  return {
    token,
    user
  };
}

export async function login(_, args, { prisma }) {
  try {
    const user = await prisma.user.findUnique({
      where: { phone: args.phone }
    });
    if (!user) {
      return new ValidationError('No such user found');
    }
  
    const valid = Crypto.compare(args.password, user.password);
    if (!valid) {
      return new AuthenticationError('Invalid password');
    }
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '90d' });
  
    return {
      token,
      user
    }
  } catch (e) {
    console.error(e)
    return new Error(e)
  }
}

export async function updateUser(_, { id, data }, { prisma }) {
  const updateUser = await prisma.user.update({
    where: { id },
    data,
  })
  return updateUser
}

export async function deleteUser(_, { id }, { prisma }) {
  const deleteUser = await prisma.user.delete({
    where: { id }
  })
  return deleteUser
}