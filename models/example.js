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
    is_vendor: DataTypes.BOOLEAN,
    vendor_id: DataTypes.INTEGER,
    user_password: DataTypes.STRING
  });
  return User;
};
