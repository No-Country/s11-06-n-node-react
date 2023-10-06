const passport = require('passport');

const isAuthenticated = (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, usuario, info) => {
      if (err) {
        return next(err);
      }
      if (!usuario) {
        return res.status(401).json({ error: 'Usuario no autorizado' });
      }
      req.user = usuario;
      next();
    })(req, res, next);
  };

module.exports = {isAuthenticated}