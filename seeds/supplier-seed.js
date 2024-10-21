const { Supplier} = require('../models');
const supplierData = [
  {
    name: 'Supplier One',
    country: 'Vietnam',
  },
  {
    name: 'Supplier Two',
    country: 'Vietnam',
  },
  {
    name: 'Supplier Three',
    country: 'Vietnam',
  },
  {
    name: 'Supplier Four',
    country: 'Vietnam',
  },
  {
    name: 'Supplier Five',
    country: 'Vietnam',
  },
];

const seedSuppliers = () => Supplier.bulkCreate(supplierData);

module.exports = seedSuppliers;
