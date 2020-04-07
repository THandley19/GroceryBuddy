"use strict";

var bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("Users", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    user_address_street: DataTypes.STRING,
    user_address_street2: DataTypes.STRING,
    user_address_city: DataTypes.STRING,
    user_address_state: DataTypes.STRING,
    user_address_zip: DataTypes.STRING,
    email: DataTypes.STRING,
    is_store: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    },
    store_id: DataTypes.INTEGER,
    user_password: DataTypes.STRING
  });

  User.prototype.verifyPassword = function(password) {
    return bcrypt.compareSync(password, this.user_password);
  };

  User.addHook("beforeCreate", function(user) {
    user.user_password = bcrypt.hashSync(
      user.user_password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  User.associate = function(models) {
    User.hasOne(models.Stores, {
      foreignKey: {
        allowNull: false
      },
      onDelete: "cascade"
    });
    User.hasOne(models.Orders, {
      foreignKey: {
        allowNull: false
      },
      onDelete: "cascade"
    });
  };

  return User;
};
