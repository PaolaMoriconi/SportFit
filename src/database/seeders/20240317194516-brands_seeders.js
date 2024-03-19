'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('brands', [
  {  
    name: 'Adidas',
    createdAt : new Date,
    updatedAt : new Date,
  },
  {
    name: 'Nike',
    createdAt : new Date,
    updatedAt : new Date,
  },
  {
    name: 'Topper',
    createdAt : new Date,
    updatedAt : new Date,
  },
  {
    name: 'Puma',
    createdAt : new Date,
    updatedAt : new Date,
  },
  {
    name: 'Atomik',
    createdAt : new Date,
    updatedAt : new Date,
  },
  {
    name: 'Umbro',
    createdAt : new Date,
    updatedAt : new Date,
  },
  {
    name: 'Converse',
    createdAt : new Date,
    updatedAt : new Date,
  },
  {
    name: 'Fila',
    createdAt : new Date,
    updatedAt : new Date,
  },
  {
    name: 'Footy',
    createdAt : new Date,
    updatedAt : new Date,
  },
  {
    name: 'John Foos',
    createdAt : new Date,
    updatedAt : new Date,
  },
  {
    name: 'Olympikus',
    createdAt : new Date,
    updatedAt : new Date,
  },
  {
    name: 'Rebook',
    createdAt : new Date,
    updatedAt : new Date,
  }
], {});
  
},

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
