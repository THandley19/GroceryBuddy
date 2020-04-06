module.exports = function(sequelize, DataTypes) {
    var Products = sequelize.define("Products", {
      product_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      product_description: {
        type: DataTypes.STRING
      },
      product_category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      product_subcategory: {
        type: DataTypes.STRING
      },
      product_brand: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });

    // Products.associate = function(models) {
    //   Products.belongsTo(models.Vendors);
    // };
    return Products;
  };