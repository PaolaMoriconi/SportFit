'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Size extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Product, {
        as : 'sizes',
        otherKey : 'product_id',
        foreignKey : 'size_id',
        through : 'products_sizes'
      })
    }
  }
  Size.init({
    name: DataTypes.STRING,
    subcategorie_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Size',
  });
  return Size;
};