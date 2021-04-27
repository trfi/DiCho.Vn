require('dotenv').config()
import { ApolloServer, PubSub, gql } from 'apollo-server'
import { makeExecutableSchema } from '@graphql-tools/schema';
import { PrismaClient } from '@prisma/client';
import * as resolvers from './resolvers'
import { getUserId, getTokenPayload } from './utils';
import { authDirective } from "./auth";
const fs = require('fs')
const pubsub = new PubSub();

console.log(resolvers);
const { authDirectiveTypeDefs, authDirectiveTransformer } = authDirective('auth');


const prisma = new PrismaClient({
  errorFormat: 'minimal'
});

const schema = makeExecutableSchema({
  typeDefs: [authDirectiveTypeDefs, gql`${fs.readFileSync(__dirname.concat('/schema.graphql'), 'utf8')}`],
  resolvers,
  schemaTransforms: [authDirectiveTransformer],
});


const server = new ApolloServer({
  schema,
  context: ({ req }) => {
    return {
      ...req,
      prisma,
      pubsub,
      user:
        req && req.headers.token
          ? getTokenPayload(req.headers.token)
          : null
    };
  },
  subscriptions: {
    onConnect: (connectionParams: any) => {
      console.log(connectionParams);
      if (connectionParams.token) {
        return {
          prisma,
          userId: getUserId(
            null,
            connectionParams.token
          )
        };
      } else {
        return {
          prisma
        };
      }
    }
  }
});

server.listen().then(({ url, subscriptionsUrl }) => {
  console.log(`🚀 Server ready at ${url}`);
  console.log(`🚀 Subscriptions ready at ${subscriptionsUrl}`);
});
