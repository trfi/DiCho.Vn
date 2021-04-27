import { Crypto, objectId } from "../../utils";
const jwt = require('jsonwebtoken');
import { UserInputError, ValidationError, AuthenticationError } from 'apollo-server';


export async function signup(_, args, context) {
  const password = Crypto.encrypt(args.password);
  const user = await context.prisma.user.create({
    data: { ...args, id: objectId(), password }
  });

  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: 36000 });

  return {
    token,
    user
  };
}

export async function signin(_, args, { prisma }) {
  const user = await prisma.user.findUnique({
    where: { phone: args.phone }
  });
  if (!user) {
    throw new ValidationError('No such user found');
  }

  const valid = Crypto.compare(args.password, user.password);
  if (!valid) {
    throw new AuthenticationError('Invalid password');
  }
  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: 36000 });

  return {
    token,
    user
  };
}