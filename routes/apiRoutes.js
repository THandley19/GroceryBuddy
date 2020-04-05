var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.post("/api/users", function(req, res) {});

  // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(
  //     dbExample
  //   ) {
  //     res.json(dbExample);
  //   });
  // });
  app.get("/api/products/:product", function(req, res) {
    let searchTerm = req.params.product;
    db.Products.findAll({
      where: {
        product_name: {
            [db.Sequelize.Op.substring]: searchTerm
        }
      }
    }).then(function(products) {
      var context = {
        allMatchingProducts: products.map(function(products) {
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
    //   res.render("addProduct", { allMatchingProducts: context.allMatchingProducts });
    res.json(products);
    });
  });
};

