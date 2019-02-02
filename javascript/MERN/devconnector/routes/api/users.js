const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const KEY = require('../../config/keys').KEY;
// Models
const User = require('../../models/User');

// @route         GET api/users/test
// @description   Test users route
// @access        public
router.get('/test', (req, res) => res.json({ msg: 'users works' }));

// @route         GET api/users/register
// @description   Register user
// @access        public
router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: 'Email already exits' });
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: '200', //size
        r: 'pg', // rating
        d: 'mm' //default
      });

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

// @route         GET api/users/login
// @description   Login User / Returning JWT Token
// @access        public
router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then((user) => {
    if (!user) return res.status(404).json({ email: 'User not found' });
    // Check for password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // When user matched!!, Generate the token here and send that token back

        const payload = { id: user.id, name: user.name, avatar: user.avatar }; // JWT Paylaod
        // Sign Token by passing the payload and key and expires in (maybe days?)
        jwt.sign(payload, KEY, { expiresIn: 3600 }, (err, token) => {
          // Bearer
          res.json({ sucess: true, token: 'Bearer ' + token });
          // Use Passprt js to verify the token response
        });
      } else {
        return res.status(400).json({ password: 'Password Incorrect' });
      }
    });
  });
});

// @route         GET api/users/current
// @description   Return current user
// @access        private
// passing password.authenticate('jwt) middleware makes this route protected. Here jwt specifies what strategy to use
router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({ msg: 'Success' });
  }
);

module.exports = router;
