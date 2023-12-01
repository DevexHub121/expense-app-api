const jwt = require('jsonwebtoken');
const config = require('../config/config');


module.exports = {

    createJwt: function (user, callback) {
        // let expiresIn = rememberMe ? '15d' : '1d';
        let token = jwt.sign({
            id: user.id,
            email: user.email.toLowerCase(),
            userName: user.userName,
        }, config.jwt.secret, { algorithm: config.jwt.algorithm });
        callback(token);
    }
}