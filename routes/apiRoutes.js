var db = require("../models");

module.exports = function(app) {
 
  app.post("/api/orderproducts", function(req, res) {
    let product = req.body;
    console.log(product);
    db.Orders.findAll({
      where: {
        UserId: req.body.UserId,
        status: "Pending"
      }
    }).then(function(order) {
      console.log(order);
      db.OrderProducts.create({
        OrderId: order[0].id,
        ProductTitle: req.body.title
      }).then(function(op) {
        db.Orders.update({
          order_items: db.sequelize.literal('order_items + 1')
        }, {
          where: {
            id: order[0].id
          }
        }).then(function(updatedorder) {
          db.OrderProducts.findAll({
            where: {
              OrderId: order[0].id
            }
          }).then(function(products) {
            res.json(products);
          })
        })
      })
    })
  });
};