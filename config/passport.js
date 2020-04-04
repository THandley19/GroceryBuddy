var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var db = require("../models");

// user signup
passport.use(
  "local-signup",
  new LocalStrategy(
    {
      usernameField: "email",
      passReqToCallback: true
    },
    function(req, email, password, done) {
      db.Users.findOne({ where: { email: email } }).then(function(err, user) {
        if (err) {
          return done(err);
        }
        if (user) {
          return done(null, false, { message: "Email is already in use." });
        }
        db.Users.create({
          first_name: req.body.firstName,
          last_name: req.body.lastName,
          user_address_street: req.body.streetAddress,
          user_address_street2: req.body.streetAddress2,
          user_address_city: req.body.city,
          user_address_state: req.body.state,
          user_address_zip: req.body.zipcode,
          email: req.body.email,
          user_password: req.body.password
        }).then(function(dbUser) {
          return done(null, dbUser);
        });
      });
    }
  )
);

// user login
passport.use(
  "local-login",
  new LocalStrategy(
    {
      usernameField: "email"
    },
    function(email, password, done) {
      db.Users.findOne({ where: { email: email } }).then(function(user) {
        if (!user) {
          return done(null, false, { message: "Email incorrect" });
        }
        if (!user.verifyPassword(password)) {
          return done(null, false, { message: "Incorrect password" });
        }
        return done(null, user);
      });
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = passport;
