const express = require('express');
const bodyParser = require('body-parser');
const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graph-tools');
const { createServer } = require('http');

const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const constants = require('./config/constants');

require('./config/db.js');

const app = express();
app.use(bodyParser.json());

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

app.use(
  constants.GRAPHQL_PATH,
  graphiqlExpress({
    endPointUrl: constants.GRAPHQL_PATH
  })
);

app.use(
  constants.GRAPHQL_PATH,
  graphqlExpress({
    schema
  })
);

const graphqlServer = createServer(app);

graphqlServer.listen(constants.PORT, () =>
  console.log(`Server started at ${constants.PORT}`)
);
