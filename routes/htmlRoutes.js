var db = require("../models");
var passport = require("../config/passport.js");

module.exports = function(app) {
  // Load home page
  app.get("/", function(req, res) {
    res.render("index");
  });

  // user sign up
  app.get("/user-sign-up", function(req, res) {
    res.render("userSignUp");
  });
  app.post(
    "/user-sign-up",
    passport.authenticate("local-signup", {
      successRedirect: "/user-account",
      failureRedirect: "/user-sign-up"
    })
  );
  // Load page with vendor sign up form
  app.get("/vendor-sign-up", function(req, res) {
    res.render("vendorSignUp");
  });
  // user login
  app
    .route("/login")
    .get(function(req, res) {
      res.render("login");
    })
    .post(
      passport.authenticate("local-login", {
        successRedirect: "/user-account",
        failureRedirect: "/login"
      })
    );
  // Load user account page
  app.get("/user-account", function(req, res) {
    res.render("userAccountPage");
  });
  // Load vendor account page
  app.get("/vendor-account", function(req, res) {
    res.render("vendorAccountPage");
  });
  // Load products page
  app.get("/products", function(req, res) {
      // if (err) console.log(err);
      db.Products.findAll({}).then(function(products){
        console.log(products[0]);
  
        
        res.render("addProduct", products[0]);
      });
  });
  app.get("/summary", function(req, res) {
    res.render("summary");
  });
  // logout of session
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/login");
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
