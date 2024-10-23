const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const { v4: uuidv4 } = require('uuid');

class Product extends Model {}

Product.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: uuidv4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        category_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        is_new : {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        stock_quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        supplier_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
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
