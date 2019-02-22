const mongoose = require('mongoose');
const constants = require('./constants.js');

mongoose.set('debug', true); //debug mode on
mongoose.Promise = global.Promise; // For deprecreation error

try {
  mongoose.connect(constants.DB_URL, { useMongoClient: true });
} catch (e) {
  mongoose.createConnection(constants.DB_URL, { useMongoClient: true });
}

mongoose.connection
  .once('open', () => console.log('Mongoose running'))
  .on('error', (e) => {
    throw e;
  });
