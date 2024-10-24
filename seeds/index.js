const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedUsers = require('./user-seeds');
const seedSuppliers = require('./supplier-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ alter: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedUsers();
  console.log('\n----- USER SEEDED -----\n');

  await seedSuppliers();
  console.log('\n----- USER Supplier -----\n');

  process.exit(0);
};

seedAll();
