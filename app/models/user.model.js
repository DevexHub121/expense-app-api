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
    let User = sequelize.define('user', {
        email: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        userName: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        mobile: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        countryCode: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        authCode: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        isMFA: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        isRestricted: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false,
        },
        lastLogin: {
            type: DataTypes.DATE,
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        createdBy: {
            type: DataTypes.INTEGER,
        },
        updatedBy: {
            type: DataTypes.INTEGER,
        },
    }, {
        tableName: 'user',
        paranoid: true,
        timestamps: true,
        freezeTableName: true
    });

    // User.generateHash = function (password) {
    //     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    // };

    // User.prototype.isValidPassword = function (password) {
    //     return bcrypt.compareSync(password, this.password)
    // };

    // User.prototype.toJSON = function () {
    //     let values = Object.assign({}, this.get());

    //     delete values.password;
    //     delete values.createdBy;

    //     return values;
    // };

    return User;
};
