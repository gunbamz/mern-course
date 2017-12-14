// backend must use ES5 requre syntax
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require('./models/user');
require("./services/passport");

mongoose.connect(keys.mongoURI);

// creates running express application in node
const app = express();

// allows express to use cookies
app.use(
  // cookieSession takes configuration information
  cookieSession({
    // maxAge is how long cookie will last
    // here is 30 days in milliseconds
    maxAge: 30 * 24 * 60 * 60 * 1000,
    // cookie key will encrypt cookie and should not be committed
    keys: [keys.cookieKey]
  })
);

// tells passport to use cookies to manage auth
app.use(passport.initialize());
app.use(passport.session());

// calls function in authRoutes.js and attatches app object
require("./routes/auth_routes")(app);

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
