'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products_sizes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('products_sizes');
  }
};