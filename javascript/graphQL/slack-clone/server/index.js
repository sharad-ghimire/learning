import express from 'express';
import bodyParser from 'body-parser';
var { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schema';
import resolvers from './resolvers';

export const schema = makeExecutableSchema({ typeDefs, resolvers });

const app = express();
const GRAPHQL_URL = '/graphql';

// One endpoint
app.use(GRAPHQL_URL, bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: GRAPHQL_URL }));

app.listen(8080);
