const User = require('../../models/User.js');
const bcrypt = require('bcryptjs');

module.exports = {
  createUser: async ({ input }) => {
    try {
      const user = await User.findOne({ email: input.email });
      if (user) {
        throw new Error('User exists already');
      }
      const hashedPassword = await bcrypt.hash(input.password, 12);

      const newUser = new User({
        email: input.email,
        password: hashedPassword
      });
      const result = await newUser.save();
      return { ...result._doc, password: null, _id: result.id };
    } catch (error) {
      throw error;
    }
  }
};
