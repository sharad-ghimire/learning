const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql'); //Exports a valida midleware function
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const app = express();
app.use(bodyParser.json());

// Models
const Event = require('./models/Event.js');
const User = require('./models/User.js');

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

      type User {
        _id: ID!
        email: String!
        password: String
      }

      input EventInput {
        title: String!
        description: String!
        price: Float!
        date: String!
      }
      input UserInput {
        email: String!
        password: String!
      }

      type RootQuery {
        events: [Event!]!
      }

      type RootMutation {
        createEvent(input: EventInput): Event
        createUser(input: UserInput): User
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
        const event = new Event({
          title: input.title,
          description: input.description,
          price: +input.price,
          date: new Date(input.date),
          creator: '5c6d4bda618ed42464127e8a'
        });
        let createdEvent;
        // Hardcoded creator for now
        // Otherwise it will return instantly without waiting for mongoDB response so will not get the valid result
        return event
          .save()
          .then((result) => {
            createdEvent = { ...result._doc, _id: result.id };
            return User.findById('5c6d4bda618ed42464127e8a');
          })
          .then((user) => {
            if (!user) {
              throw new Error('User not found');
            }
            user.createdEvents.push(event);
            return user.save();
          })
          .then((result) => {
            return createdEvent;
          })
          .catch((err) => console.log(err));
      },
      createUser: ({ input }) => {
        return User.findOne({ email: input.email })
          .then((user) => {
            if (user) {
              throw new Error('User exists already');
            }
            return bcrypt.hash(input.password, 12);
          })
          .then((hashedPassword) => {
            const user = new User({
              email: input.email,
              password: hashedPassword
            });
            return user.save();
          })
          .then((result) => {
            return { ...result._doc, password: null, _id: result.id }; // Spread operator because mongose return data as _doc
            // Password null for security purposes
          })
          .catch((err) => {
            throw err;
          });
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
