'use strict';

const fs = require('fs');
const path = require('path');
const rols = JSON.parse(fs.readFileSync(path.join(__dirname,'../../data/rols.json'),'utf-8'));

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('rols', rols, {});    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('rols', null, {});
  }
};
