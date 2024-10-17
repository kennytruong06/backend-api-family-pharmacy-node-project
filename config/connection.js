require('dotenv').config();
const Sequelize = require('sequelize');

// Khởi tạo kết nối với Sequelize sử dụng thông tin từ .env
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
  }
);

module.exports = sequelize;
