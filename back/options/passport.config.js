const passportJwt = require('passport-jwt');
const {Usuario} = require('../models/Usuario');

const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;

const PassportStrategy = new StrategyJwt({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'ClaveUltraSecreta'
}, async (jwtPayload, next) => {
    const usuario = await Usuario.findByPk(jwtPayload.id)
    if (usuario) {
        next(false, usuario, null)
    } else {
        next(true, null, null)
    }
})

module.exports = {PassportStrategy}