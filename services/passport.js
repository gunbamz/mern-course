const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

// create model class for users
const User = mongoose.model('users');

// creates a token from the user for future authentication
passport.serializeUser((user, done) => {
  // user.id is MongoDB's record id
  done(null, user.id);
});

// tells passport which strategies to use
// arguments: object with clientID, clientSecret args, and route; accessToken callback
passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
    // queries DB for a user with the given googleId
    // this is an async action
    User.findOne({ googleId: profile.id }).then((existingUser) => {
      if (existingUser) {
        // already have record with ID
        // done function tells passport that everything is done
        done(null, existingUser);
      } else {
        // no user record -- create and save new user
        // this is also async
        new User({googleId: profile.id})
        .save()
        .then((user) => {
          // done takes an error argument and a user object
          done(null, user);
        });
      }
    });
  }
));
