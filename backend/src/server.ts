require('dotenv').config()
import { ApolloServer, PubSub, gql, SchemaDirectiveVisitor } from 'apollo-server'
import { makeExecutableSchema } from '@graphql-tools/schema';
import { mapSchema, getDirectives, MapperKind } from "@graphql-tools/utils";
const { PrismaClient } = require('@prisma/client');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const Subscription = require('./resolvers/Subscription');
const User = require('./resolvers/User');
const Post = require('./resolvers/Post');
const Vote = require('./resolvers/Vote');
const fs = require('fs');
const path = require('path');
const { getUserId, getTokenPayload } = require('./utils');
const pubsub = new PubSub();


function authDirective(directiveName: string, getUserFn: (token: string) => { hasRole: (role: string) => boolean} ) {
  const typeDirectiveArgumentMaps: Record<string, any> = {};
  return {
    authDirectiveTypeDefs: `directive @${directiveName}(
      requires: Role = ADMIN,
    ) on OBJECT | FIELD_DEFINITION

    enum Role {
      USER
      ADMIN
      MODERATOR
    }`,
    authDirectiveTransformer: (schema) => mapSchema(schema, {
      [MapperKind.TYPE]: (type) => {
        const typeDirectives = getDirectives(schema, type);
        typeDirectiveArgumentMaps[type.name] = typeDirectives[directiveName];
        return undefined;
      },
      [MapperKind.OBJECT_FIELD]: (fieldConfig, _fieldName, typeName) => {
        const fieldDirectives = getDirectives(schema, fieldConfig);
        const directiveArgumentMap = fieldDirectives[directiveName] ?? typeDirectiveArgumentMaps[typeName];
        if (directiveArgumentMap) {
          const { requires } = directiveArgumentMap;
          if (requires) {
            const { resolve } = fieldConfig;
            fieldConfig.resolve = function (source, args, context, info) {
              const user = getUserFn(context.headers.token);
              if (!user.hasRole(requires)) {
                throw new Error('Not authorized');
              }
              return resolve(source, args, context, info);
            }
            return fieldConfig;
          }
        }
      }
    })
  };
};

const { authDirectiveTypeDefs, authDirectiveTransformer } = authDirective('auth', getUser);


function getUser(token: string) {
  const roles = ['USER', 'MODERATOR', 'ADMIN'];
  return {
    hasRole: (role) => {
      const user = getTokenPayload(token)
      console.log(user);
      const tokenIndex = roles.indexOf(user.role);
      const roleIndex = roles.indexOf(role);
      console.log('role: ', role);
      console.log('tokenIndex: ' + tokenIndex);
      console.log('roleIndex: '+ roleIndex);
      console.log(roleIndex >= 0 && tokenIndex >= roleIndex);
      return roleIndex >= 0 && tokenIndex >= roleIndex;
    },
  };
}


const prisma = new PrismaClient({
  errorFormat: 'minimal'
});

const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
  Post,
  Vote
};

console.log(__dirname.concat('/schema.graphql'));

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

server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );
