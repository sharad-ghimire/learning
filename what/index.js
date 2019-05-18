const express = require('express');
const data = require('./data.json');

const app = express();

const port = process.env.PORT || 5000;

app.use('/lado', (req, res) => {
  //   console.log(data[0]);
  
});

app.listen(port, () => console.log(`Server running on port ${port}`));
