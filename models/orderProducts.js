module.exports = function(sequelize, DataTypes) {
    var OrderProducts = sequelize.define("OrderProducts", {
      ProductTitle: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Quantity: {
        type: DataTypes.INTEGER
      }
    });
  
    OrderProducts.associate = function(models) {
      OrderProducts.belongsTo(models.Orders);
    };
  
    return OrderProducts;
  };