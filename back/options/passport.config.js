const passport = require("passport");
const Usuario = require("../models/Usuario");
const passportJwt = require("passport-jwt");
const { createHash, isValid } = require("../utils/hashpassword");
const local = require("passport-local");

const LocalStrategy = local.Strategy;

const initializePassport = () => {
  // Configurar la estrategia "register" para el registro de usuarios
  passport.use(
    "register",
    new LocalStrategy(
      { usernameField: "email", passReqToCallback: true },
      async (req, email, password, done) => {
        try {
          // Verificar si el usuario ya existe
          let usuario = await Usuario.findOne({ email });
          if (usuario) {
            return done(null, false, { message: "Usuario ya existe" });
          }
          // Crear un nuevo usuario
          const nuevoUsuario = {
            email,
            password: createHash(password),
            nombre: req.body.nombre,
          };
          try {
            let result = await Usuario.create(nuevoUsuario);
            return done(null, result);
          } catch (err) {
            return done(err);
          }
        } catch (err) {
          return done(err);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user._id)
  })

  passport.deserializeUser((id, done) => {
    Usuario.findById(id, done)
  })

  // Configurar la estrategia "login" para la autenticación de usuarios
  passport.use(
    "login",
    new LocalStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        try {
          // Buscar al usuario por correo electrónico
          let usuario = await Usuario.findOne({ email });
          if (!usuario) {
            return done(null, false, { message: "Usuario no encontrado" });
          }
          // Verificar si la contraseña es válida
          if (!isValid(usuario, password)) {
            return done(null, false, { message: "Contraseña incorrecta" });
          }
          return done(null, usuario);
        } catch (err) {
          return done(err);
        }
      }
    )
  );
};

const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;

const PassportStrategy = new StrategyJwt(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "ClaveUltraSecreta", 
  },
  async (jwtPayload, next) => {
    console.log(jwtPayload)
    const usuario = await Usuario.findById(jwtPayload.id);
    console.log(usuario)
    if (usuario) {
      next(null, usuario);
    } else {
      next(null, false);
    }
  }
);

passport.use("jwt", PassportStrategy);


module.exports = { initializePassport, PassportStrategy };
/* const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;

const PassportStrategy = new StrategyJwt(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "ClaveUltraSecreta",
  },
  async (jwtPayload, next) => {
    const usuario = await Usuario.findByPk(jwtPayload.id);
    if (usuario) {
      next(false, usuario, null);
    } else {
      next(true, null, null);
    }
  }
);

module.exports = { PassportStrategy }; */
