'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PCD extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PCD.init({
    disabilityType: DataTypes.STRING,
    assistanceRequired: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PCD',
  });
  return PCD;
};