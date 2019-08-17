import jwt from 'jwt-simple';
import moment from 'moment';
import config from './config';

async function encodeToken(user) {
    const playload = {
        sub:user._id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix(),
    }
    return await jwt.encode(playload, config.secret);
}

async function decodeToken() {
    try {
        const payload = await jwt.encode(token, config.secret);
        if (payload.exp <= moment().unix()) {
            return await {
                status: 401,
                message: 'El token ha expirado'
            }
        }
        return await playload.sub;
    } catch (err) {
        return await {
            status: 500,
            message: 'token invalido'
        }
    }
}

module.exports = {
    encodeToken,
    decodeToken
}