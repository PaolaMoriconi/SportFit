'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
  
      this.belongsTo(models.Category,{as:"categories",foreignKey:"category_id"}),
      this.belongsTo(models.Brand,{as:"brands",foreignKey:"brand_id"}),
      this.belongsTo(models.Size,{as:"sizes",foreignKey:"size_id"}),
      this.belongsTo(models.Color,{as:"colors",foreignKey:"color_id"}),
      this.hasMany(models.Image,{as:"images",foreignKey:"product_id"}),
      this.hasMany(models.Item,{as:"items",foreignKey:"product_id"})
    }

  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    category_id: DataTypes.INTEGER,
    color_id: DataTypes.INTEGER,
    size_id: DataTypes.INTEGER,
    brand_id:DataTypes.INTEGER
  }, 
  {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};