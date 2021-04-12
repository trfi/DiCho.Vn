const jwt = require('jsonwebtoken');
const { Crypto } = require('../utils')
const { UserInputError } = require('apollo-server');


async function post(parent, { input }, { prisma, pubsub, userId }, _) {
  const { categoryId, ...filteredInput } = input;
  const newPost = await prisma.post.create({
    data: {
      ...filteredInput,
      category : { connect: { id: categoryId } },
      postedBy: { connect: { id: userId } }
    }
  });
  pubsub.publish('NEW_POST', newPost);
  return newPost;
}

async function signup(parent, args, context, _) {
  const password = Crypto.encrypt(args.password);
  const user = await context.prisma.user.create({
    data: { ...args, password }
  });

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: 36000 });

  return {
    token,
    user
  };
}

async function login(parent, args, { prisma }, _) {
  const user = await prisma.user.findUnique({
    where: { phone: args.phone }
  });
  if (!user) {
    throw new Error('No such user found');
  }

  const valid = Crypto.compare(args.password, user.password);
  if (!valid) {
    throw new Error('Invalid password');
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: 36000 });

  return {
    token,
    user
  };
}

async function category(parent, { input }, { prisma }, _) {
  if (input.children && typeof(input.children) == String) input.children = JSON.parse(input.children)
  console.log(input);
  const newCategory = await prisma.category.create({
    data: {
      ...input
    }
  });
  return newCategory;
}

async function vote(parent, args, { prisma, userId, pubsub }, _) {
  const vote = await prisma.vote.findUnique({
    where: {
      postId_userId: {
        postId: args.postId,
        userId: userId
      }
    }
  });

  if (Boolean(vote)) {
    throw new Error(
      `Already voted for post: ${args.postId}`
    );
  }

  const newVote = prisma.vote.create({
    data: {
      user: { connect: { id: userId } },
      post: { connect: { id: args.postId } }
    }
  });
  pubsub.publish('NEW_VOTE', newVote);

  return newVote;
}


module.exports = {
  post,
  signup,
  login,
  category,
  vote
};
