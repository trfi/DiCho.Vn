import { ApolloServer } from 'apollo-server';
import { Prisma } from 'prisma-binding';
import { importSchema } from 'graphql-import';
import jwt from 'jsonwebtoken';
import 'dotenv/config.js';

import Query from './resolvers/Query.js'
import Mutation from './resolvers/Mutation.js'

const typeDefs = importSchema("src/schemas/schema.graphql");

const db = new Prisma({
  typeDefs: './prisma/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT || 'http://localhost:4466',
  secret: process.env.PRISMA_SECRET || '',
  debug: true
})

const getCurrentUser = async (request) => {
  console.log(request);
  if (!request.headers.token) {
      return null;
  }
  const user = await jwt.decode(
      request.headers.token,
      process.env.JWT_SECRET_KEY,
  );
  return { ...user };
};

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Mutation,
    Query
  },
  context: async ({ request }) => {
    return {
      ...request,
      db,
    };
  }
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
})
