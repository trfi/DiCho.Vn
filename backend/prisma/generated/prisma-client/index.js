"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
  },
  {
    name: "PostDetail",
    embedded: true
  },
  {
    name: "Params",
    embedded: true
  },
  {
    name: "Category",
    embedded: false
  },
  {
    name: "Types",
    embedded: false
  },
  {
    name: "Gender",
    embedded: false
  },
  {
    name: "Role",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`,
  secret: `${process.env["MY_SECRET"]}`
});
exports.prisma = new exports.Prisma();
