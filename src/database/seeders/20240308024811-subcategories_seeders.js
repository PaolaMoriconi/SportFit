"use strict";

const fs = require("fs");
const path = require("path");
const subcategories = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "../../data/subcategories.json"),
    "utf-8"
  )
);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("subcategories", subcategories, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("subcategories", null, {});
  },
};
