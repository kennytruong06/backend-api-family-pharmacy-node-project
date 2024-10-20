const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.STRING(36),
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: DataTypes.STRING,
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        role: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        imgUrl: DataTypes.STRING,
        gmail_id: DataTypes.STRING,
        fb_id: DataTypes.STRING,
    },
    {
        sequelize,
        timestamps: true,
        modelName: 'user',
    }
);

module.exports = User;
