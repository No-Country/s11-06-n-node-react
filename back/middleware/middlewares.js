const passport = require("passport");

const isAuthenticated = (req, res, next) => {
  try {
    passport.authenticate("jwt", { session: false }, (err, usuario, info) => {
      if (err) {
        return next(err);
      }
      if (!usuario) {
        return res.status(401).json({ error: "Usuario no autorizado" });
      }
      req.user = usuario;
      next();
    })(req, res, next);
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error });
  }
  
};

module.exports = { isAuthenticated };
