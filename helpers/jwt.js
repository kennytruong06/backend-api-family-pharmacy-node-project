const jwt = require('express-jwt');
require('dotenv').config();

function authJwt() {
    const secret = process.env.JWT_SECRET;
    const api = process.env.API_URL;

    return jwt({
        secret: secret,
        algorithms: ['HS256'],
        isRevoked: isRevoked
    }).unless({
        path: [
            { url: /\/public\/uploads(.*)/, methods: ['GET', 'OPTIONS'] },
            { url: /\/uploads(.*)/, methods: ['GET', 'OPTIONS'] },
            { url: /\/api\/products(.*)/, methods: ['GET', 'OPTIONS'] },
            { url: /\/api\/categories(.*)/, methods: ['GET', 'OPTIONS'] },
            { url: /\/api\/users\/([0-9a-fA-F-]{36})$/, methods: ['GET', 'OPTIONS', 'PUT'] },
            { url: /\/api\/suppliers(.*)/, methods: ['GET', 'OPTIONS'] },

            `${api}/users/login`,
            `${api}/users/register`,
            `${api}/users/verify-otp`,
        ]
    });
}

async function isRevoked (req, payload, done){

    if(!payload.isAdmin){
        done(null, true)
    }

    done();
}

module.exports = authJwt;
