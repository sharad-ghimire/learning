const { buildSchema } = require('graphql');

module.exports = buildSchema(`
      type Booking {
        _id: ID!
        event: Event!
        user: User!
        createdAt: String!
        updatedAt: String!
      }

      type Event {
        _id: ID!
        title: String!
        description: String!
        price: Float!
        date: String!
        creator: User!
      }

      type User {
        _id: ID!
        email: String!
        password: String
        createdEvent: [Event!]
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
        bookings: [Booking!]! 
      }

      type RootMutation {
        createEvent(input: EventInput): Event
        createUser(input: UserInput): User
        bookEvent(eventId: String!): Booking!
        cancelBooking(bookingId: String!): Event!
      }
    
      schema {
        query: RootQuery
        mutation: RootMutation
      }
    `);