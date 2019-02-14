import express from "express";
import path from "path";
import bodyParser from "body-parser";
import cors from "cors";

const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeTypes, mergeResolvers } from "merge-graphql-schemas";

import models from "./models";

// Reads all the files inside given folder into an array and merge those
const typeDefs = mergeTypes(fileLoader(path.join(__dirname, "./schema")));
const resolvers = mergeResolvers(
  fileLoader(path.join(__dirname, "./resolvers"))
);
// Create schema from typeDefination and Resolvers
const schema = makeExecutableSchema({ typeDefs, resolvers });

const app = express();
// We are allowing all websites to access our server
app.use(cors("*"));
const GRAPHQL_URL = "/graphql";

// One endpoint
app.use(
  GRAPHQL_URL,
  bodyParser.json(),
  graphqlExpress({
    schema,
    context: {
      models,
      user: {
        id: 1
      }
    }
  })
);
app.use("/graphiql", graphiqlExpress({ endpointURL: GRAPHQL_URL }));

models.sequelize.sync().then(() => {
  app.listen(8080);
});
