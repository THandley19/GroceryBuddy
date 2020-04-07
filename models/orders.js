module.exports = function(sequelize, DataTypes) {
  var Orders = sequelize.define("Orders", {
    order_items: {
      type: DataTypes.INTEGER    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL(5, 2)}
  });

  Orders.associate = function(models) {
    Orders.belongsTo(models.Users, {
      onDelete: "cascade"
    });
  };

  return Orders;
};