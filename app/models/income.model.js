'use strict';
// const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    let Income = sequelize.define('income', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        amount: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        tableName: 'income',
        freezeTableName: true
    });
    return Income;
};
