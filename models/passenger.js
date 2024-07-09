// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Passenger extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Passenger.init({
//     name: DataTypes.STRING,
//     email: DataTypes.STRING,
//     cpf: DataTypes.STRING,
//     rg: DataTypes.STRING,
//     dateOfBirth: DataTypes.DATE,
//     sex: DataTypes.STRING,
//     gender: DataTypes.STRING,
//     socialName: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Passenger',
//   });
//   return Passenger;
// };

'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Passenger extends Model {
    static associate(models) {
      // define association here
    }
  }

  Passenger.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    rg: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    sex: DataTypes.STRING,
    gender: DataTypes.STRING,
    socialName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Passenger',
    tableName: 'Passengers', // Certifique-se de que o nome está correto e corresponde ao banco de dados
  });

  return Passenger;
};
