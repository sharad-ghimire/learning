const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User.js');

module.exports = {
  login: async ({ email, password }) => {
    try {
    } catch (error) {
      throw error;
    }

    // Validate email and password combination is correct
    const user = await User.findOne({ email });
    if (!user) throw new Error('User doesnot exist');
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) throw new Error('Password Incorrect');
    // Create Token
    const token = await jwt.sign(
      { userId: user.id, email: user.email },
      'someKey',
      {
        expiresIn: '1h'
      }
    );
    // Should meet the requirement of AuthDat in schema
    return { userId: user.id, token, tokenExpiration: 1 };
  },
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
