'use strict';

const fs = require('fs');
const path = require('path');
const products = JSON.parse(fs.readFileSync(path.join(__dirname,'../../data/products.json'),'utf-8'));

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products',products, {});
  
},

async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('products', null, {});
}
};