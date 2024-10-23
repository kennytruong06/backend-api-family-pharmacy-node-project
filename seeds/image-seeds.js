const { Image } = require('../models');

const imageData = [
  {
    product_id: '1a7792f4-ca2b-401b-b6f0-82f3bab71690',
    url: 'https://example.com/images/vitamin-c.jpg',
    isMain: true,
  },
  {
    product_id: '1a7792f4-ca2b-401b-b6f0-82f3bab71690',
    url: 'https://example.com/images/vitamin-c-2.jpg',
    isMain: false,
  },
  {
    product_id: 'bbcb162e-25d0-4b10-adb8-6abb52aab6d8',
    url: 'https://example.com/images/sunscreen.jpg',
    isMain: true,
  },
  {
    product_id: 'bbcb162e-25d0-4b10-adb8-6abb52aab6d8',
    url: 'https://example.com/images/sunscreen-2.jpg',
    isMain: false,
  },
  {
    product_id: '2e9b1a1f-4b3b-482a-9617-af7320dd8557',
    url: 'https://example.com/images/paracetamol.jpg',
    isMain: true,
  },
  {
    product_id: 'b4585cad-16b7-43cc-84dd-59600425b496',
    url: 'https://example.com/images/blood-pressure-monitor.jpg',
    isMain: true,
  },
  {
    product_id: '30faec4c-2ccf-4414-bd80-6ee0233ff354',
    url: 'https://example.com/images/thermometer.jpg',
    isMain: true,
  },
  {
    product_id: '7cce7c64-ddee-4a12-b11a-d4f8956b3100',
    url: 'https://example.com/images/omega-3.jpg',
    isMain: true,
  },
  {
    product_id: '503d2336-83b7-4bac-afbb-28c6a7a8133e',
    url: 'https://example.com/images/night-cream.jpg',
    isMain: true,
  },
  {
    product_id: 'b5b9d22a-0981-4717-9bb2-1c2f87ca2151',
    url: 'https://example.com/images/coldrex.jpg',
    isMain: true,
  },
  {
    product_id: 'fac394af-2b41-4f55-93c6-76030abae635',
    url: 'https://example.com/images/natural-body-wash.jpg',
    isMain: true,
  },
  {
    product_id: 'ef2e5240-4b9d-4553-b6b6-158b5ba3d7c3',
    url: 'https://example.com/images/deodorant.jpg',
    isMain: true,
  },
  {
    product_id: '5e4bc7b1-5e18-40a3-9ed3-915827823e2f',
    url: 'https://example.com/images/calcium-supplement.jpg',
    isMain: true,
  },
  {
    product_id: '34c5fcd3-85a1-468d-81cb-813c52c1479d',
    url: 'https://example.com/images/acne-cream.jpg',
    isMain: true,
  },
];

const seedImage = async () => {
  await Image.bulkCreate(imageData);
};

module.exports = seedImage;
