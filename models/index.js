// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};


•	Category
o	id
o	Integer
o	Doesn't allow null values
o	Set as primary key
o	Uses auto increment
o	category_name
o	String
o	Doesn't allow null values
