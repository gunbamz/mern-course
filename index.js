// backend must use ES5 requre syntax
const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");

// creates running express application in node
const app = express();

// tells passport which strategies to use
// arguments: object with clientID, clientSecret args, and route; accessToken callback
passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
    console.log('accessToken', accessToken);
    console.log('refreshToken', refreshToken);
    console.log('profile', profile);
  }
));

// .get tells the express app to listen for a GET request to the route '/'
app.get('/', (req, res) => {
  // req = HTTP request, res = HTTP response, .send() sends some data
  // (usually JSON) to the frontend
  res.send({hi: 'there'});
});

// route that is used for google authentication
// second argument lets passport know to use google OAuth
// and gives access to certain parts of google account
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  }
));

// route used for sending secret code back to google
app.get(
  '/auth/google/callback', passport.authenticate('google')
);

// dynamic port binding: listen's for Heroku's environment variable PORT
// if no environment variable, use 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT);
