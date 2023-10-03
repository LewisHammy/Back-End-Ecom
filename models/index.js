const Product = require('./product');
const Category = require('./category');
const Tag = require('./tag');
const ProductTag = require('./productTag');

Product.belongsTo(Category, {
  foreignKey: 'category_id'
});
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'productTag_products',
  foreignKey: 'product_id'
});
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'productTag_products',
  foreignKey: 'tag_id'
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
