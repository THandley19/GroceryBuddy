module.exports = function(sequelize, DataTypes) {
  var Vendors = sequelize.define("Vendors", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    vendor_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vendor_address_street: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vendor_address_street2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vendor_address_city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vendor_address_state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vendor_address_zip: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vendor_contact_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vendor_email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vendor_password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_vendor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  // Vendors.associate = function(models) {
  //   Vendors.hasMany(models.Products, {
  //     onDelete: "cascade"
  //   });
  // };

  return Vendors;
};
