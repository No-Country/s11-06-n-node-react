const Usuario = require("../models/Usuario");
const jwt = require("jsonwebtoken");

async function signUp(usuario) {
    let user;
  try {
    const usuarioExistente = await Usuario.findOne({email: usuario.email});
    if (!usuarioExistente) {
        user = new Usuario();
        user._id = usuario._id;
        user.nombre = usuario.nombre;
        user.apellido = usuario.apellido;
        user.email = usuario.email
    } else {
        user = usuarioExistente
        user.nombre = usuario.nombre;
        user.apellido = usuario.apellido;
    }   
    const token = jwt.sign(
      {
        id: user._id,
      },
      "ClaveUltraSecreta"
    );
    user.status = "conectado";
    await user.save();
    return { accessToken: token, user };
  } catch (error) {
    console.log(error);
    throw new Error("Error al crear el usuario");
  }
}
module.exports = { signUp };
