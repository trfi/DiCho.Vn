require('dotenv').config()
const { ApolloServer, PubSub, gql, SchemaDirectiveVisitor } = require("apollo-server");
const { makeExecutableSchema, mapSchema, MapperKind } = require('@graphql-tools/schema');
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

console.log(MapperKind);

function authDirective(directiveName, getUserFn) {
  console.log('authDirective');
  const typeDirectiveArgumentMaps = {};
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
        console.log(schema);
        console.log(type);
        console.log(typeDirectives);
        typeDirectiveArgumentMaps[type.name] = typeDirectives[directiveName];
        return undefined;
      },
      [MapperKind.OBJECT_FIELD]: (fieldConfig, _fieldName, typeName) => {
        console.log(typeName);
        const fieldDirectives = getDirectives(schema, fieldConfig);
        const directiveArgumentMap = fieldDirectives[directiveName] ?? typeDirectiveArgumentMaps[typeName];
        if (directiveArgumentMap) {
          const { requires } = directiveArgumentMap;
          if (requires) {
            const { resolve = defaultFieldResolver } = fieldConfig;
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

// function getUser(token) {
//   const roles = ['UNKNOWN', 'USER', 'REVIEWER', 'ADMIN'];
//   return {
//     hasRole: (role) => {
//       const tokenIndex = roles.indexOf(token);
//       const roleIndex = roles.indexOf(role);
//       return roleIndex >= 0 && tokenIndex >= roleIndex;
//     },
//   };
// }

const { authDirectiveTypeDefs, authDirectiveTransformer } = authDirective('auth', getUser);


function getUser(token) {
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
    onConnect: (connectionParams) => {
      if (connectionParams.authToken) {
        return {
          prisma,
          userId: getUserId(
            null,
            connectionParams.authToken
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
