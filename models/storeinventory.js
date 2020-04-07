module.exports = function(sequelize, DataTypes) {
    var StoreInventory = sequelize.define("StoreInventory", {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.DECIMAL(5,2),
        allowNull: false
      }
    });

    StoreInventory.associate = function(models) {
        StoreInventory.belongsTo(models.Stores);
      };
  
    return StoreInventory;
  };
  