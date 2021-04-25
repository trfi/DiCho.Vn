require('dotenv').config()
const { ApolloServer, PubSub, gql, SchemaDirectiveVisitor } = require("apollo-server");
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

const { defaultFieldResolver } = require('graphql');

class AuthDirective extends SchemaDirectiveVisitor {
  visitObject(type) {
    this.ensureFieldsWrapped(type);
    type._requiredAuthRole = this.args.requires;
  }
  // Visitor methods for nested types like fields and arguments
  // also receive a details object that provides information about
  // the parent and grandparent types.
  visitFieldDefinition(field, details) {
    this.ensureFieldsWrapped(details.objectType);
    field._requiredAuthRole = this.args.requires;
  }

  ensureFieldsWrapped(objectType) {
    // Mark the GraphQLObjectType object to avoid re-wrapping:
    if (objectType._authFieldsWrapped) return;
    objectType._authFieldsWrapped = true;

    const fields = objectType.getFields();
    Object.keys(fields).forEach(fieldName => {
      const field = fields[fieldName];
      const { resolve = defaultFieldResolver } = field;
      field.resolve = async function (...args) {
        console.log(args[2].body.operationName);
        // Get the required Role from the field first, falling back
        // to the objectType if no Role is required by the field:
        const requiredRole =
          field._requiredAuthRole ||
          objectType._requiredAuthRole;

        if (! requiredRole) {
          return resolve.apply(this, args);
        }

        const context = args[2];
        // console.log(context);
        // console.log(requiredRole);
        const user = await getUser(context.headers.token);
        // console.log('--------------------------');
        console.log(user.hasRole(requiredRole));
        if (! user.hasRole(requiredRole)) {
          throw new Error("Not authorized");
        }

        return resolve.apply(this, args);
      };
    });
  }
}

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

const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf8'
  ),
  resolvers,
  schemaDirectives: {
    auth: AuthDirective,
    authorized: AuthDirective,
    authenticated: AuthDirective
  },
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
