const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

// create model class for users
const User = mongoose.model('users');

// tells passport which strategies to use
// arguments: object with clientID, clientSecret args, and route; accessToken callback
passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
    // upon successful signup, create new user in DB and save it
    new User({googleId: profile.id}).save();
  }
));
