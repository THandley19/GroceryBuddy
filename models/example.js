module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userName: DataTypes.STRING,
    streetAddress: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    email: DataTypes.STRING,
    userPassword: DataTypes.STRING
  });
  return User;
};
