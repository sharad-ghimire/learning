const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql'); //Exports a valida midleware function
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

const Event = require('./models/Event.js');

const events = [];

app.use(
  '/graphql',
  graphqlHTTP({
    schema: buildSchema(`
      type Event {
        _id: ID!
        title: String!
        description: String!
        price: Float!
        date: String!
      }

      input EventInput {
        title: String!
        description: String!
        price: Float!
        date: String!
      }

      type RootQuery {
        events: [Event!]!
      }
      type RootMutation {
        createEvent(input: EventInput): Event
      }
    
      schema {
        query: RootQuery
        mutation: RootMutation
      }
    `),
    rootValue: {
      events: () => {
        return Event.find()
          .then((events) => {
            return events.map((event) => {
              return { ...event._doc, _id: event._doc._id.toString() };
            });
          })
          .catch((err) => console.log(err));
      },
      createEvent: ({ input }) => {
        // const event = {
        //   _id: Math.random().toString(),
        //   title: input.title,
        //   description: input.description,
        //   price: +input.price, //convert to Number
        //   date: new Date().toISOString()
        // };
        const event = new Event({
          title: input.title,
          description: input.description,
          price: +input.price,
          date: new Date(input.date)
        });

        // Otherwise it will return instantly without waiting for mongoDB response so will not get the valid result
        return event
          .save()
          .then((result) => {
            return { ...result._doc, _id: result.id };
          })
          .catch((err) => console.log(err));
      }
    },
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
