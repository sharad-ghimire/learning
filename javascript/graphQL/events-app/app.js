const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql'); //Exports a valida midleware function

const mongoose = require('mongoose');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

// Middleware
const isAuth = require('./middleware/is-auth');

const app = express();
app.use(bodyParser.json());

// For cross resqonse
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});
app.use(isAuth);

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
    app.listen(8000, () => {
      console.log(`Server running in port 8000`);
    });
  })
  .catch((err) => console.log(err));
