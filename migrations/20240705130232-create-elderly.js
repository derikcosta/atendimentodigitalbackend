'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('elderly', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      passageiro_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'passageiros', // Nome da tabela pai
          key: 'id', // Chave estrangeira
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      beneficio: {
        type: Sequelize.STRING(100), // Ajuste conforme necessário
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('elderly');
  },
};
