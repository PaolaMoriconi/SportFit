'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Stocks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:{
            tableName:'products'
          },
          key:'id'
        }
      },
      size_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:{
            tableName:'sizes'
          },
          key:'id'
        }
      },
      color_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:{
            tableName:'colors'
          },
          key:'id'
        }
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable('Stocks');
  }
};