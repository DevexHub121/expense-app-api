'use strict';
// const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    let Expense = sequelize.define('expense', {
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
        tableName: 'expense',
        freezeTableName: true
    });
    return Expense;
};
