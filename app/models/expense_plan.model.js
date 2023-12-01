// const mongoose = require("mongoose");

// const User = mongoose.model(
//   "User",
//   new mongoose.Schema({
//     username: String,
//     email: String,
//     password: String,
//     roles: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Role"
//       }
//     ]
//   })
// );

// module.exports = User;

'use strict';

// const bcrypt = require('bcrypt');


module.exports = (sequelize, DataTypes) => {
    let Expenseplan = sequelize.define('expense_plan', {
        Gifts: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        Food: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        Health_medical:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        Home: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        Transportation: {
           type: DataTypes.INTEGER,
            allowNull: true,
        },
        Personal: {
           type: DataTypes.INTEGER,
            allowNull: true,
        },
        Pets: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        Utilities: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        Travel: {
           type: DataTypes.INTEGER,
            allowNull: true,
        },
        Debt: {
           type: DataTypes.INTEGER,
            allowNull: true,
        },
        Other: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        custom_category1: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        custom_category2: {
           type: DataTypes.INTEGER,
            allowNull: true,
        },
        custom_category3: {
           type: DataTypes.INTEGER,
            allowNull: true,
        },
    }, {
        tableName: 'expense_plan',
        paranoid: true,
        timestamps: true,
        freezeTableName: true
    });

    return Expenseplan;
};
