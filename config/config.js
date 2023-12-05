
"use strict";

const env = process.env.NODE_ENV = process.env.NODE_ENV || 'local';
console.log('env-----------------')
console.log('env-----------------')
console.log('env-----------------')
console.log(env)
console.log('process.env-----------------')
console.log('process.env-----------------')
console.log('process.env-----------------')
console.log(process.env)
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
        secret: "1TJ!$v:BcQ^/Qy7|j9T8]+(B{~/Uyuh%fNiEPoj4{;VE{}(9~Y#31E?]u:MN;ai",
        algorithm: 'HS512'
    },
};

config.development = {
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
        secret: "1TJ!$v:BcQ^/Qy7|j9T8]+(B{~/Uyuh%fNiEPoj4{;VE{}(9~Y#31E?]u:MN;ai",
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
