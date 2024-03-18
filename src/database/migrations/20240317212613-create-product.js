'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      discount: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      stock: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:{
            tableName:'categories'
          },
          key:'id'
        }
      },
      brand_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:{
            tableName:'brands'
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
      size_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:{
            tableName:'colors'
          },
          key:'id'
        }
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
    await queryInterface.dropTable('Products');
  }
};