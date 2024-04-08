'use strict';

const fs = require('fs');
const path = require('path');
const status = JSON.parse(fs.readFileSync(path.join(__dirname,'../../data/status.json'),'utf-8'));

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('statuses',status, {});    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('statuses', null, {});
  }
};
