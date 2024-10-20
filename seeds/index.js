const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedUser = require('./user-seed');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedUser();
  console.log('\n----- USER SEEDED -----\n');

  process.exit(0);
};

seedAll();
