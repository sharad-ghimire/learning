const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const KEY = require('../../config/keys').KEY;
// Models
const User = require('../../models/User');

// Load Input Validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// @route         GET api/users/test
// @description   Test users route
// @access        public
router.get('/test', (req, res) => res.json({ msg: 'users works' }));

// @route         GET api/users/register
// @description   Register user
// @access        public
router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      errors.email = 'Email already exits';
      return res.status(400).json(errors);
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
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then((user) => {
    errors.email = 'User not found';
    if (!user) return res.status(404).json(errors);

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
        errors.password = 'Password incorrect';
        return res.status(400).json(errors);
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
    res.json({ id: req.user.id, name: req.user.name, email: req.user.email });
  }
);

module.exports = router;
