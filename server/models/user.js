'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Pokemon, {
        as: 'pokemon',
        foreignKey: 'owner_user_id'
      })
    }
  };
  User.init({
    firstname: DataTypes.STRING(64),
    lastname: DataTypes.STRING(128),
    email: DataTypes.STRING(128),
    password: DataTypes.TEXT,
    image: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};