'use strict';

const fs = require('fs');
const path = require('path');
const sizes = JSON.parse(fs.readFileSync(path.join(__dirname,'../../data/sizes.json'),'utf-8'));

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sizes',sizes, {});
  
},

async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('sizes', null, {});
}
};