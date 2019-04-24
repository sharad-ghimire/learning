export default {
  Query: {
    // @params : parent, args, context (from index.js)
    getUser: (parent, { id }, { models }) =>
      models.User.findOne({ where: { id } }),
    getAllUsers: (parent, args, { models }) => models.User.findAll()
  },
  Mutation: {
    createUser: (parent, args, { models }) => models.User.create(args)
  }
};
