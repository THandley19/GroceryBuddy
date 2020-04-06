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
      successRedirect: "/products",
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
        successRedirect: "/products",
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
    db.Products.findAll({
      include: "vendors"
    }).then(function(products) {
      console.log(products[0]);
      var context = {
        allProducts: products.map(function(products) {
          return {
            id: products.id,
            name: products.product_name,
            category: products.product_category,
            sub_category: products.product_subcategory,
            brand: products.product_brand,
            vendor: products.product_vendor_id,
            price: products.product_price
          };
        })
      };
      res.render("addProduct", { allProducts: context.allProducts });
    });
  });
  app.get("/products/search", function(req, res) {
    let { term } = req.query;
    db.Products.findAll({
      where: {
        product_name: { [db.Sequelize.Op.like]: "%" + term + "%" }
      }
    })
      .then(function(products) {
        var context = {
          allProducts: products.map(function(products) {
            return {
              id: products.id,
              name: products.product_name,
              category: products.product_category,
              sub_category: products.product_subcategory,
              brand: products.product_brand,
              price: products.product_price
            };
          })
        };

        res.render("addProduct", { allProducts: context.allProducts });
      })
      .catch(err => console.log(err));
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
