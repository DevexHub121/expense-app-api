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
    let Incomeplan = sequelize.define('income_plan', {
        savings: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        paycheck: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        bonus: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        interest: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        other: {
           type: DataTypes.INTEGER,
            allowNull: true,
        },
        custom_category: {
           type: DataTypes.INTEGER,
            allowNull: true,
        },
    }, {
        tableName: 'income_plan',
        paranoid: true,
        timestamps: true,
        freezeTableName: true
    });

    return Incomeplan;
};
