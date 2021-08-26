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