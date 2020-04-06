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

  Vendors.associate = function(models) {
    Vendors.hasMany(models.Products, {
      onDelete: "cascade"
    });
  };

  return Vendors;
};