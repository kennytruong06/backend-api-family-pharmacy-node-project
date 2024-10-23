const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const { v4: uuidv4 } = require('uuid');

class Image extends Model {}

Image.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: uuidv4,
            allowNull: false,
            primaryKey: true,
        },
        product_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_main: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'image',
    }
);

module.exports = Image;
