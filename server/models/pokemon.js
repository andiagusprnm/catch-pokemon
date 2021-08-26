'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pokemon.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'owner_user_id'
      })
    }
  };
  Pokemon.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    weight: DataTypes.NUMBER,
    height: DataTypes.NUMBER,
    picture: DataTypes.TEXT,
    owner_user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pokemon',
  });
  return Pokemon;
};