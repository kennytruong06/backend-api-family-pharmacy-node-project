const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const { v4: uuidv4 } = require('uuid');

class Supplier extends Model {}

Supplier.init(
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
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'supplier',
    }
);

module.exports = Supplier;
