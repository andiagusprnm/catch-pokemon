'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exchange extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Exchange.belongsTo(models.User, {
        as: 'user_owner',
        foreignKey: 'user_submission'
      })
      Exchange.belongsTo(models.User, {
        as: 'user_trader',
        foreignKey: 'user_exchange'
      })
      Exchange.belongsTo(models.Pokemon, {
        as: 'pokemon',
        foreignKey: 'pokemon_id'
      })
    }
  };
  Exchange.init({
    user_submission: DataTypes.INTEGER,
    pokemon_id: DataTypes.INTEGER,
    wanted: DataTypes.STRING,
    status: DataTypes.STRING,
    user_exchange: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Exchange',
  });
  return Exchange;
};