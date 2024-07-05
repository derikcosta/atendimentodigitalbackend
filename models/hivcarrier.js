'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HIVCarrier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HIVCarrier.init({
    diagnosisDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'HIVCarrier',
  });
  return HIVCarrier;
};