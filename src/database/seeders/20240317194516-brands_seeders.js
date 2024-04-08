'use strict';

const fs = require('fs');
const path = require('path');
const brands = JSON.parse(fs.readFileSync(path.join(__dirname,'../../data/brands.json'),'utf-8'));

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('brands',brands, {});
  
},

async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('brands', null, {});
}
};
