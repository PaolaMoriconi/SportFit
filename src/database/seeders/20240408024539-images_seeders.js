'use strict';

const fs = require('fs');
const path = require('path');
const images = JSON.parse(fs.readFileSync(path.join(__dirname,'../../data/images.json'),'utf-8'));

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('images',images, {});
  
},

async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('images', null, {});
}
};