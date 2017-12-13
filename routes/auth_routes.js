const passport = require("passport");

module.exports = (app) => {
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



  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
