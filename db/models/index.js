const { User, UserSchema } = require('./user.model');
const { Product, ProdcuctSchema } = require('./product.model');
const { Customer, CustomerSchema } = require('./customer.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Product.init(ProdcuctSchema, Product.config(sequelize));
  Customer.init(CustomerSchema, Product.config(sequelize));

  Customer.associate(sequelize.models);
}

module.exports = setupModels;
