"use strict";

const fs = require("fs");
const path = require("path");
const sections = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "../../data/sections.json"),
    "utf-8"
  )
);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("sections", sections, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("sections", null, {});
  },
};
