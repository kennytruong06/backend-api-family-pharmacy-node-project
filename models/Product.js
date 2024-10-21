const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

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
        price: {
            type: DataTypes.DECIMAL(10, 2), // 10 and 2 determine the precision and scale of the price
            allowNull: false,
            validate: {
                isDecimal: true, // ensure the value is a decimal
            },
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0, // stock is set to 0 if not specified
            validate: {
                isNumeric: true
            }
        },
        category_id: {
            type: DataTypes.INTEGER,

        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'product',
    }
);

module.exports = Product;