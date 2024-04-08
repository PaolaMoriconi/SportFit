'use strict';

const fs = require('fs');
const path = require('path');
const categories = JSON.parse(fs.readFileSync(path.join(__dirname,'../../data/categories.json'),'utf-8'));

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories',categories, {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('categories', null, {});
    
  }
};
