'use strict';
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs')
const users = JSON.parse(fs.readFileSync(path.join(__dirname,'../../data/users.json'),'utf-8'));
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('users', users, {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('users', null, {});

  }
};
