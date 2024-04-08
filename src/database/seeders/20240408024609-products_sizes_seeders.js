"use strict";

const fs = require("fs");
const path = require("path");
const products_sizes = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "../../data/products_sizes.json"),
    "utf-8"
  )
);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("products_sizes", products_sizes, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products_sizes", null, {});
  },
};
