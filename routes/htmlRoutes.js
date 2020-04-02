var db = require("../models");

// checking to see if session information and
// user_sid exist, if they do then that means the user is logged in
// and it redirects them to the user account page
var sessionChecker = function(req, res, next) {
  if (req.session.user && req.cookies.user_sid) {
    res.redirect("/user-account");
  } else {
    next();
  }
};

module.exports = function(app) {
  // Load home page
  app.get("/", function(req, res) {
    res.render("index");
  });

  // using .route we can call GET and POST requests on this instead
  //  of creating seperate app.get + app.post routes
  app
    .route("/user-sign-up")
    // GET Route to render user sign up page
    .get(function(req, res) {
      res.render("userSignUp");
    })
    // Creates user and saves to database
    .post(function(req, res) {
      db.User.create({
        name: req.body.name,
        streetAddress: req.body.streetAddress,
        city: req.body.city,
        state: req.body.state,
        email: req.body.email,
        userPassword: req.body.password
      })
        //
        .then(function(user) {
          // Passes the values of the user form to
          // the session information
          req.session.user = user.dataValues;
          res.redirect("/user-account");
        })
        .catch(function(error) {
          res.redirect("/user-sign-up");
        });
    });
  // Load page with vendor sign up form
  app.get("/vendor-sign-up", function(req, res) {
    res.render("vendorSignUp");
  });
  app
    .route("/login")
    .get(sessionChecker, function(req, res) {
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
