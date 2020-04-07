var db = require("../models");

module.exports = function(app) {
 
  app.post("/api/orderproducts", function(req, res) {
    let product = req.body.title;
    console.log(product);
    db.Orders.findOne({
      where: {
        UserId: req.body.UserId,
        status: "Pending"
      }
    }).then(function(order) {
      db.OrderProducts.Create({
        OrderId: order.id,
        title: req.body.title
      }).then(function(op) {
        db.Orders.Update({
          order_items: sequelize.literal('order_items + 1')
        }, {
          where: {
            id: order.id
          }
        }).then(function(updatedorder) {
          db.OrderProducts.findAll({
            where: {
              OrderId: order.id
            }
          }).then(function(products) {
            res.json(products);
          })
        })
      })
    })
  });
};