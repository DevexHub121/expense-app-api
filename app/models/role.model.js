// const mongoose = require("mongoose");

// const Role = mongoose.model(
//   "Role",
//   new mongoose.Schema({
//     name: String
//   })
// );

// module.exports = Role;


'use strict';
// const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    let Role = sequelize.define('role', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        roleName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        roleDescription: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        roleTags: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        isDefaultRegister: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false,
        },
        isDefaultInvite: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false,
        },
        isClientUser: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false,
        },
        isOrgUser: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false,
        },
        isOrgAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false,
        },
        createdBy: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        updatedBy: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        client_assignment_permission: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        lead_assignment_permission: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        }
    }, {
        tableName: 'role',
        freezeTableName: true
    });
    return Role;
};
