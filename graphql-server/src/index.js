"use strict";
const express = require("express");
const app = express();
const port = process.env.port || 3000;
const { makeExecutableSchema } = require("graphql-tools");
const { graphqlHTTP } = require("express-graphql");
const { readFileSync } = require("fs");
const { join } = require("path");
const resolvers = require("./resolvers");
const typeDefs = readFileSync(join(__dirname, "schema.graphql"),'utf-8');
const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use(
  "/api",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(3000, () =>
  console.log(`Server is listening at http://localhost:${port}/api`)
);
