const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const { v4: uuidv4 } = require('uuid');

class Category extends Model {}

Category.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: uuidv4,
            allowNull: false,
            primaryKey: true
        },
        category_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        parent_id: {
            type: DataTypes.UUID,
            allowNull: true,
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'category',
    }
);

module.exports = Category;
