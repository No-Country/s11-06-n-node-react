const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function signUp(usuario) {
    let user;
  try {
    const usuarioExistente = await User.findOne({email: usuario.email});
    if (!usuarioExistente) {
        user = new User();
        user._id = usuario._id;
        user.name = usuario.name;
        user.lastname = usuario.lastname;
        user.email = usuario.email
    } else {
        user = usuarioExistente
        user.name = usuario.name;
        user.lastname = usuario.lastname;
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
