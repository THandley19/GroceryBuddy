module.exports = function(sequelize, DataTypes) {
  var Products = sequelize.define("Products", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Products.associate = function(models) {
    Products.hasMany(models.OrderProducts);
  };

  return Products;
};
