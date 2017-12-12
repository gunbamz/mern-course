// backend must use ES5 requre syntax
const express = require("express");
// creates running express application in node
const app = express();

// .get tells the express app to listen for a GET request to the route '/'
app.get('/', (req, res) => {
  // req = HTTP request, res = HTTP response, .send() sends some data
  // (usually JSON) to the frontend
  res.send({hi: 'there'});
});

// dynamic port binding: listen's for Heroku's environment variable PORT
// if no environment variable, use 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT);
