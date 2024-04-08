'use strict';
const fs = require('fs');
const path = require('path');
const colors = JSON.parse(fs.readFileSync(path.join(__dirname,'../../data/colors.json'),'utf-8'));

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('colors', colors, {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('colors', null, {});
 }
};
