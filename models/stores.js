module.exports = function(sequelize, DataTypes) {
  var Stores = sequelize.define("Stores", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zip: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    delivers: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });

  Stores.associate = function(models) {
    Stores.belongsTo(models.Users);
  };

  return Stores;
};