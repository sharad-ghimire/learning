const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql'); //Exports a valida midleware function

const mongoose = require('mongoose');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const app = express();
app.use(bodyParser.json());

// Models

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true
  })
);

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${
      process.env.MONGO_PASSWORD
    }@eventsapp-loutc.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`
  )
  .then(() => {
    app.listen(3000, () => {
      console.log(`Server running in port 3000`);
    });
  })
  .catch((err) => console.log(err));
