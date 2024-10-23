const { Supplier} = require('../models');

const supplierData = [
  {
    id: '413e9b73-9f66-4fc4-a6f8-ba7dd090673b',
    name: 'Công ty TNHH Dược phẩm Hậu Giang',
    country: 'Việt Nam',
  },
  {
    id: '06829d81-568b-450f-8d14-961f45cd0354',
    name: 'Công ty cổ phần Dược phẩm Đạt Vi Phú',
    country: 'Việt Nam',
  },
  {
    id: 'd4d3b1bb-e052-411a-8292-30b59518e525',
    name: 'Công ty TNHH Sanofi-Aventis Việt Nam',
    country: 'Việt Nam',
  },
  {
    id: 'b56d0810-f6b8-4423-9d85-e405abb9fd5e',
    name: 'Công ty TNHH Merck Sharp & Dohme Việt Nam',
    country: 'Việt Nam',
  },
  {
    id: '2aec90ce-ea1a-4be1-bfad-9fb638299208',
    name: 'Công ty TNHH Dược phẩm Stada Việt Nam',
    country: 'Việt Nam',
  },
];

const seedSuppliers = () => Supplier.bulkCreate(supplierData);

module.exports = seedSuppliers;
