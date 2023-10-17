const mongoose = require("mongoose");

const Usuario = require("../models/Usuario");
const AuthServices = require("../services/auth-services");

async function getGoogle(req, res) {
  const usuario = {
    _id: new mongoose.Types.ObjectId(req.user._id),
    nombre: req.user.name.givenName,
    apellido: req.user.name.familyName,
    email: req.user.emails[0].value
  };
  try {
    const response = await AuthServices.signUp(usuario);
    console.log(response)
    res.status(200).send(response);
  } catch (error) {
    res.status(500).json({ error });
  }
}

module.exports = {
  getGoogle,
};
