let Products = require('./products');
let db = require('../models')

module.exports = function(sequelize, DataTypes) {
  var Vendors = sequelize.define("Vendors", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true

    },
    vendor_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Vendors.associate = models => {
    Vendors.hasMany(models.Products, {
      onDelete: "cascade"
    });
  }

  Products.hasOne(models.Vendors, {
    onDelete: "cascade"
  });


  return Vendors;
};