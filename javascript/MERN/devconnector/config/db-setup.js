const mongoose = require('mongoose');
const db = require('./keys').MONGO_URI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log(`MongoDB Connected`))
  .catch((err) => console.log(err));
