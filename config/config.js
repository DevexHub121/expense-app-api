
"use strict";

const env = process.env.NODE_ENV = process.env.NODE_ENV || 'local';

let config = {};

config.production = {
    db: {
        "username": "sql12666687",
                "password": "d3CEvd3Z3a",
                "database": "sql12666687",
                "host": "sql12.freesqldatabase.com",
        dialect: "mysql",
        migrationStorage: "json",
        define: {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            timestamps: true
        }
    },
    jwt: {
        secret: process.env.SECRET_KEY,
        algorithm: 'HS512'
    },
};

config.development = {
    db: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOSTNAME,
        dialect: "mysql",
        migrationStorage: "json",
        define: {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            timestamps: true
        }

    },
    jwt: {
        secret: process.env.SECRET_KEY,
        algorithm: 'HS512'
    },
};

config.local = {
        db: {
            "username": "sql12666687",
                "password": "d3CEvd3Z3a",
                "database": "sql12666687",
                "host": "sql12.freesqldatabase.com",
                "dialect": "mysql",
         define: {
             charset: 'utf8',
             collate: 'utf8_general_ci',
             timestamps: true
         }
     }, 
   
    jwt: {
        secret: '1TJ!$v:BcQ^/Qy7|j9T8]+(B{~/Uyuh%fNiEPoj4{;VE{}(9~Y#31E?]u:MN;ai',
        algorithm: 'HS512'
    },
};
module.exports = config[env];
