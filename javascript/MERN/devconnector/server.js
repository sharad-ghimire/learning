const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport'); // Main authentication password

// Routes
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
require('./config/db-setup');
// Passport middleware
app.use(passport.initialize());
// Everything else we do in passport -> we gonna do it in config file
// And pass the instance of passport create above to that  file
require('./config/passport.js')(passport);

// Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
