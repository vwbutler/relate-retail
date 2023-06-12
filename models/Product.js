// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;


•	Product
o	id
o	Integer
o	Doesn't allow null values
o	Set as primary key
o	Uses auto increment
o	product_name
o	String
o	Doesn't allow null values
o	price
o	Decimal
o	Doesn't allow null values
o	Validates that the value is a decimal
o	stock
o	Integer
o	Doesn't allow null values
o	Set a default value of 10
o	Validates that the value is numeric
o	category_id
o	Integer
o	References the category model's id
