const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql'); //Exports a valida midleware function
const { buildSchema } = require('graphql');

const app = express();
app.use(bodyParser.json());

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
        return events;
      },
      createEvent: ({ input }) => {
        const event = {
          _id: Math.random().toString(),
          title: input.title,
          description: input.description,
          price: +input.price, //conver to Number
          date: new Date().toISOString()
        };
        return event;
        events.push(event);
      }
    },
    graphiql: true
  })
);

app.listen(3000, () => {
  console.log(`Server running in port 3000`);
});
