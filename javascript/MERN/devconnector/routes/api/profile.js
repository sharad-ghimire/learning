const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Models
const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route         GET api/profile/test
// @description   Test profile route
// @access        public
router.get('/test', (req, res) => res.json({ msg: 'profile works' }));

// @route         GET api/profile
// @description   Get current user's profile
// @access        protected
// We are not using /:id params because when we use token, then the user information will be stored in token (req.user)
router.get(
  '/',
  passport.authenticate('jwt', { session: false }), // Make it protected route
  (req, res) => {
    const errors = {};

    Profile.findOne({ user: req.user.id })
      .then((profile) => {
        if (!profile) {
          errors.noprofile = 'There is no profile for this user';
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch((err) => res.status(404).json(err));
  }
);

module.exports = router;
