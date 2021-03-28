import { GraphQLServer } from 'graphql-yoga';
import { importSchema } from 'graphql-import';
import jwt from 'jsonwebtoken';

import resolvers from './resolvers';
import { Prisma } from '../prisma/generated/prisma-client';

import 'dotenv/config';

const typeDefs = importSchema('src/schemas/user.graphql');

export const db = new Prisma({
  endpoint: process.env.PRISMA_ENDPOINT || 'http://localhost:4466',
  secret: process.env.PRISMA_SECRET || '',
});

const getCurrentUser = async (request) => {
    if (!request.headers.token) {
        return null;
    }
    const user = await jwt.decode(
        request.headers.token,
        process.env.JWT_SECRET_KEY,
    );
    return { ...user };
};

const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context: async ({ request }) => {
        const me = await getCurrentUser(request);
        return {
          me,
          prisma: db,
        };
    }
});

const port = process.env.PORT
server.start({ port }, () => {
    console.log(`App running on http://localhost:${port}`);
});