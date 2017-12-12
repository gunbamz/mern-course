// backend must use ES5 requre syntax
const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");

// creates running express application in node
const app = express();

// tells passport which strategies to use
passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret
}));

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
