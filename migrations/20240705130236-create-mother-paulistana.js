'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sao_paulo_mothers', { // Nome da tabela deve ser 'sao_paulo_mothers'
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      passageiro_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'passengers', // Corrigido para 'passengers', nome da tabela no PostgreSQL
          key: 'id', // Chave estrangeira
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      crianca_idade: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sao_paulo_mothers'); // Nome da tabela a ser deletada deve ser 'sao_paulo_mothers'
  }
};
