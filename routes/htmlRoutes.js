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
    db.Products.findAll({}).then(function(products) {
      var context = {
        allProducts: products.map(function(products) {
          return {
            id: products.id,
            name: products.name,
            category: products.category,
            brand: products.brand,
            current_user: req.user
          };
        })
      };
      res.render("addProduct", {
        allProducts: context.allProducts,
        current_user: req.user
      });
    });
  });
  app.get("/products/search", function(req, res) {
    let { term } = req.query;
    db.Products.findAll({
      where: {
        name: { [db.Sequelize.Op.like]: "%" + term + "%" }
      }
    })
      .then(function(products) {
        var context = {
          allProducts: products.map(function(products) {
            return {
              id: products.id,
              name: products.name,
              category: products.category,
              brand: products.brand
            };
          })
        };
        res.render("addProduct", { allProducts: context.allProducts });
      })
      .catch(err => console.log(err));
  });

  app.get("/summary", function(req, res) {
    let totalcost = [];
    db.Orders.findAll({
      where: {
        UserId: req.user.id,
        status: "Pending"
      }
    }).then(function(order) {
      db.OrderProducts.findAll({
        where: {
          OrderId: order[0].id
        }
      }).then(function(products) {
        db.Stores.findAll({}).then(function(stores) {
          let totalcost = [];
          for (let i = 0; i < stores.length; i++) {
            let store = stores[i];
            let total = 0;
            // store = publix
            // total = 100
            // store = aldi
            // total = 105
            // store = target
            // total = 110
            // totalcost.stores[i].name = total;
            db.StoreInventory.findAll({
              where: {
                StoreId: store.id
              }
            }).then(function(storesinv) {
              for (let j = 0; j < storesinv.length; j++) {
                var inventoryItem = storesinv[j];
                for (let i = 0; i < products.length; i++) {
                  let product = products[i].ProductTitle;
                  if (product === inventoryItem.name) {
                    let price = parseFloat(inventoryItem.price);
                    console.log(price);
                    total += price;
                    console.log(
                      "currentTotal: " +
                        Math.round((total + Number.EPSILON) * 100) / 100
                    );
                  }
                }
              }
              totalcost.push(Math.round((total + Number.EPSILON) * 100) / 100);

              // res.render => stores, total cost
              // we compared each product to the stores inventory product
            });
          }
        });
        // query stores table then query storeinventories table
      });
    });
    // we cannot access the data of the totalcost array in the front end
    res.render("summary", { totalcost: totalcost });
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
