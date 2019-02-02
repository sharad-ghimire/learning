const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  if (validator.isLength(data.name, { min: 2, max: 3 })) {
    errors.name = 'Name must be between 2 nad 30 characters';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
