"use strict";

const env = process.env.NODE_ENV = process.env.NODE_ENV || 'local';
console.log('env-----------------')
console.log('env-----------------')
console.log('env-----------------')
console.log(env)
let config = {};

config.production = {
    db: {
        uri: "mongodb+srv://admin:Admin1234@cluster0.ma3xm.mongodb.net/expense_tracker?retryWrites=true&w=majority",
    },
    jwt: {
        secret: "1TJ!$v:BcQ^/Qy7|j9T8]+(B{~/Uyuh%fNiEPoj4{;VE{}(9~Y#31E?]u:MN;ai",
        algorithm: 'HS512'
    },
};

config.development = {
    db: {
        uri: "mongodb://127.0.0.1:27017/expense_tracker",
    },
    jwt: {
        secret: "1TJ!$v:BcQ^/Qy7|j9T8]+(B{~/Uyuh%fNiEPoj4{;VE{}(9~Y#31E?]u:MN;ai",
        algorithm: 'HS512'
    },
};

config.local = {
    db: {
        uri: "mongodb://127.0.0.1:27017/expense_tracker",
    },
    jwt: {
        secret: '1TJ!$v:BcQ^/Qy7|j9T8]+(B{~/Uyuh%fNiEPoj4{;VE{}(9~Y#31E?]u:MN;ai',
        algorithm: 'HS512'
    },
};

module.exports = config[env];