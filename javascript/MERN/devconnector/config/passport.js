const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');

const User = mongoose.model('users');
const KEY = require('../config/keys').KEY;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: KEY
};

// passport is the passed parameter
module.exports = (passport) => {
  passport.use(
    new JwtStrategy(options, (jwt_payload, done) => {
      // This will only be used if we specify it in certain route
      User.findById(jwt_payload.id).then((user) => {
        if (user) return done(null, user);
        console.log(user);
        return done(null, false);
      });
    })
  );
};
