const passport = require('passport');

const isAuthenticated = (req, res, next) => {
    passport.authenticate('jwt', {session: false}, (err, cliente, info) => {
        if (err || !cliente) {
            const error = new Error('Usuario no autorizado')
            return next(error)
        }
        next()
    }) (req, res, next)
}

module.exports = {isAuthenticated}