// var db = require("../models");

module.exports = function(app) {
  // Load home page
  app.get("/", function(req, res) {
    res.render("index");
  });
  // Load page with user sign up form
  app.get("/user-sign-up", function(req, res) {
    res.render("userSignUp");
  });
  // Load page with user sign up form
  app.get("/vendor-sign-up", function(req, res) {
    res.render("vendorSignUp");
  });
  // Load login page
  app.get("/login", function(req, res) {
    res.render("login");
  });
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
    res.render("addProduct", { layout: "logged_in" });
  });
  app.get("/summary", function(req, res) {
    res.render("summary");
  });
  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(
  //     dbExample
  //   ) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
