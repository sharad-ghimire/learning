const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const validateProfileInput = require('../../validation/profile');
const validateExperienceInput = require('../../validation/experience');
const validateEducationInput = require('../../validation/education');
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
      .populate('user', ['name', 'avatar']) // gets all the values form user field  (ref in model)
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

// @route         GET api/profile/all
// @description   Get all profile
// @access        public
router.get('/all', (req, res) => {
  const errors = {};
  Profile.find()
    .populate('user', ['name', 'avatar'])
    .then((profiles) => {
      if (!profiles) {
        errors.noprofile = 'There are no profile';
        return res.status(404).json(errors);
      }
      res.json(profiles);
    })
    .catch((err) => res.status(404).json({ profile: 'THere are no profiles' }));
});

// @route         GET api/profile/handle/:handle
// @description   Get profile by handle
// @access        public
router.get('/handle/:handle', (req, res) => {
  const errors = {};

  Profile.findOne({ handle: req.params.handle })
    .populate('user', ['name', 'avatar'])
    .then((profile) => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this users';
        res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch((err) => res.status(404).json(err));
});

// @route         GET api/profile/user/:user_id
// @description   Get profile by user id
// @access        public
router.get('/user/:user_id', (req, res) => {
  const errors = {};

  Profile.findOne({ user: req.params.user_id })
    .populate('user', ['name', 'avatar'])
    .then((profile) => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this users';
        res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch((err) =>
      res.status(404).json({ profile: 'There is no profile for the user' })
    );
});

// @route         POST api/profile
// @description   Create or Edit user's profile
// @access        protected

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);
    if (!isValid) return res.status(400).json(errors);

    // Get fields
    const profileFields = {
      user: req.user.id,
      handle: req.body.handle ? req.body.handle : null,
      company: req.body.company ? req.body.company : null,
      website: req.body.website ? req.body.website : null,
      location: req.body.location ? req.body.location : null,
      bio: req.body.bio ? req.body.bio : null,
      status: req.body.status ? req.body.status : null,
      githubusername: req.body.githubusername ? req.body.githubusername : null,
      skills:
        typeof req.body.skills != undefined
          ? req.body.skills.split(',')
          : undefined
    };
    // For socials
    profileFields.social = {
      youtube: req.body.youtube ? req.body.youtube : undefined,
      twitter: req.body.twitter ? req.body.twitter : null,
      linkedin: req.body.linkedin ? req.body.linkedin : null,
      facebook: req.body.facebook ? req.body.facebook : null,
      instagram: req.body.instagram ? req.body.instagram : null
    };

    Profile.findOne({ user: req.user.id }).then((profile) => {
      if (profile) {
        // Update
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then((profile) => res.json(profile));
      } else {
        // Create
        // Check to see if handle exists, and its not duplicate
        Profile.findOne({ handle: profileFields.handle }).then((profile) => {
          if (profile) {
            errors.handle = 'That handle is already taken';
            res.status(400).json(errors);
          }
          // save profile
          new Profile(profileFields)
            .save()
            .then((profile) => res.json(profile));
        });
      }
    });
  }
);

// @route         POST api/profile/experience
// @description   Add experience to profile
// @access        protected
router.post(
  '/experience',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateExperienceInput(req.body);
    if (!isValid) return res.status(400).json(errors);

    Profile.findOne({ user: require.user.id }).then((profile) => {
      const newExp = {
        title: req.body.title,
        company: req.body.company,
        location: req.body.location,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        description: req.body.description
      };

      // Add to exp array
      profile.experience.unshift(newExp);
      profile.save().then((profile) => res.json(profile));
    });
  }
);

// @route         DELETE api/profile/experience/:id
// @description   Delete education to profile
// @access        protected
router.delete(
  '/experience/:exp_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then((profile) => {
      // Get remove index
      const removeIndex = profile.experience
        .map((item) => item.id)
        .indexOf(req.params.exp_id);
      // Splice out of array
      profile.experience.splice(removeIndex, 1);
      // Save
      profile
        .save()
        .then((profile) => res.json(profile))
        .catch((err) => res.status(404).json(err));
    });
  }
);

// @route         DELETE api/profile/education/:id
// @description   Delete education to profile
// @access        protected
router.delete(
  '/education/:edu_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then((profile) => {
      // Get remove index
      const removeIndex = profile.education
        .map((item) => item.id)
        .indexOf(req.params.edu_id);
      // Splice out of array
      profile.education.splice(removeIndex, 1);
      // Save
      profile
        .save()
        .then((profile) => res.json(profile))
        .catch((err) => res.status(404).json(err));
    });
  }
);

// @route         DELETE api/profile
// @description   Delete user and profile
// @access        protected
router.delete(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOneAndRemove({ user: req.user.id }).then(() => {
      User.findOneAndDelete({ _id: req.user.id }).then(() =>
        res.json({ sucess: 'true' })
      );
    });
  }
);

module.exports = router;
