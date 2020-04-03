var db = require("../models");

module.exports = function(app) {
  // Load home page
  app.get("/", function(req, res) {
    res.render("index");
  });

  // using .route we can call GET and POST requests on this instead
  //  of creating seperate app.get + app.post routes
  app.get("/user-sign-up", function(req, res) {
    res.render("userSignUp");
  });
  app.post("/user-sign-up", function(req, res) {
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
    }).then(function(user) {
      res.redirect("/");
    });
  });
  // Load page with vendor sign up form
  app.get("/vendor-sign-up", function(req, res) {
    res.render("vendorSignUp");
  });
  app
    .route("/login")
    .get(function(req, res) {
      res.render("login");
    })
    .post(function(req, res) {
      var email = req.body.email;
      var password = req.body.password;
      // checks to see if user exists in database, if not then will stay on the login in page
      // if they do exist then it will update the session info and redirect them to the login page
      db.User.findOne({ where: { email: email, userPassword: password } }).then(
        function(userInfo) {
          if (!userInfo) {
            res.redirect("/login");
          } else {
            req.session.userInfo = userInfo.dataValues;
            res.redirect("/user-account");
          }
        }
      );
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
    res.render("addProduct");
  });
  app.get("/summary", function(req, res) {
    res.render("summary");
  });
  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
