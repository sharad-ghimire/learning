const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require("graphql");
const axios = require("axios");
/*Hardcoded Data
const customers = [
  { id: "1", name: "Sharad", email: "s@g.com", age: 22 },
  { id: "2", name: "Ram", email: "r@s.com", age: 23 },
  { id: "3", name: "Hari", email: "h@r.com", age: 24 }
];
*/

// CustomerType
const CustomerType = new GraphQLObjectType({
  name: "Customer",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    customer: {
      type: CustomerType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        /*
        for (let i = 0; i < customers.length; i++) {
          if (customers[i].id == args.id) {
            return customers[i];
          }
        }
        */
        return axios
          .get(`http://localhost:3000/customers/${args.id}`)
          .then(res => res.data);
      }
    },
    customers: {
      type: new GraphQLList(CustomerType),
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/customers`)
          .then(res => res.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});

/*
{
  customer(id:"1"){
    name
  }
}

Gives
{
  "data": {
    "customer": {
      "name": "Sharad"
    }
  }
}
*/
