
"use strict";

const env = process.env.NODE_ENV = process.env.NODE_ENV || 'local';

let config = {};

config.production = {
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

config.preprod = {
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

config.staging = {
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
    //   db: {
    ///     username: "qbv5m7wv0ydu7m1t",
    //      password: "dzl8xmtz0gpq4ue4",
    //      database: "zffslq4jna7jwyb9",
    //      host: "127.0.0.1",
    //      dialect: "mysql",
    //      migrationStorage: "json",
    //      define: {
    //          charset: 'utf8',
    //          collate: 'utf8_general_ci',
    //          timestamps: true
    //      }
    //  }, 
    ///   db: {
    //     username: "qbv5m7wv0ydu7m1t",
    //      password: "dzl8xmtz0gpq4ue4",
    //      database: "zffslq4jna7jwyb9",
    //      host: "nj5rh9gto1v5n05t.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    //      dialect: "mysql",
    //      migrationStorage: "json",
    //      define: {
    //          charset: 'utf8',
    //          collate: 'utf8_general_ci',
    //          timestamps: true
    //     }
    //  }, 
    jwt: {
        secret: '1TJ!$v:BcQ^/Qy7|j9T8]+(B{~/Uyuh%fNiEPoj4{;VE{}(9~Y#31E?]u:MN;ai',
        algorithm: 'HS512'
    },
};

// {
//   "development": {
//     "username": "root",
//     "password": null,
//     "database": "expense_tracker",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }
module.exports = config[env];
