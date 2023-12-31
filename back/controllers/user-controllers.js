const UserServices = require("../services/users-services");
require("dotenv").config();
const cloudinary = require('cloudinary').v2;
const { CLOU_NAME, API_KEY, API_SECRET} = process.env;
cloudinary.config({
  cloud_name: CLOU_NAME, // Reemplaza 'tu_cloud_name' con tu nombre de nube de Cloudinary
  api_key: API_KEY, // Reemplaza 'tu_api_key' con tu clave de API de Cloudinary
  api_secret: API_SECRET// Reemplaza 'tu_api_secret' con tu secreto de API de Cloudinary
});


async function getAllUsers(req, res) {
  try {
    const users = await UserServices.getAll();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

async function getAllUsersToDashboard(req, res) {
  try {
    const users = await UserServices.getAllToDashboard();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
}


async function signUpUser(req, res) {
  return res.status(201).send({ message: "Usuario creado con éxito" });
}

async function signUpUserFail(req, res) {
  const { name, lastname, email, password } = req.body;
  if (!name || !lastname ||  !email || !password) {
    return res.status(400).json({ message: "Faltan datos obligatorios" });
  }
  if (
    typeof name !== "string" ||
    typeof lastname !== "string" ||
    typeof email !== "string" ||
    typeof password !== "string"
  ) {
    return res.status(400).json({ message: "Tipos de datos incorrectos" });
  }
  return res.status(400).json({ error: "Usuario ya existe" });
}

async function getUserById(req, res) {
  const { id } = req.params;
  try {
    const response = await UserServices.getById(id);
    if (response == "Usuario no encontrado") {
      return res.status(404).json({ error: response });
    } else {
      return res.status(200).send(response);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function logoutUser (req, res) {
  const {id} = req.params;
  try {
    const response = await UserServices.logout(id)
    if (response == "Usuario no encontrado") {
      return res.status(404).json({ error: response });
    } else {
      return res.status(200).send(response);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


async function editUser(req, res) {
  const {
    id,
    name,
    lastname,
    email,
    password,
    avatar,
    location,
    languages,
    birthdate,
    phone
  } = req.body;
  try {
    if (
      (name && typeof name !== "string") ||
      (lastname && typeof lastname !== "string") ||
      (email && typeof email !== "string") ||
      (password && typeof password !== "string") || 
      (birthdate && typeof birthdate !== "string") || 
      (phone && typeof phone !== "string") || 
      (location && typeof location !== "string") 
    ) {
      return res.status(400).json({ message: "Tipos de datos incorrectos" });
    }
    const response = await UserServices.edit(
      id,
      name,
      lastname,
      password,
      avatar,
      location,
      languages,
      birthdate,
      phone
    );
    if (response == "Usuario no encontrado") {
      return res.status(404).send({ error: response });
    }
    res.status(200).send(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function deleteUser(req, res) {
  const { id } = req.params;
  try {
    const response = await UserServices.deleteUser(id);
    if (response == "Usuario no encontrado") {
      res.status(404).send({ error: response });
    } else {
      res.status(200).send({ response });
    }
  } catch (error) {
    res.status(404).json({ error: "usuario no encontrado" });
  }
}

async function login(req, res) {
  const {email} = req.body
  try {
    const response = await UserServices.login(email)
    res.status(200).send(response)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function loginFail(req, res) {
  return res.status(404).send({mensaje: "Usuario o contraseña incorrectos"});
}

async function deleteImageUser (req, res){
  const { publicId } = req.params;
  const Id = `GlobalMate/${publicId}`;
  try {
    // Utiliza la API de Cloudinary para eliminar la imagen
    const result = await cloudinary.uploader.destroy(Id);
    // console.log(result)
    if (result.result === 'ok') {
      // La imagen se eliminó con éxito
      res.status(200).json({ message: 'Imagen eliminada con éxito' });
    } else {
      // Hubo un problema al eliminar la imagen
      res.status(500).json({ error: 'Error al eliminar la imagen' });
    }
  } catch (error) {
    console.error('Error al eliminar la imagen:', error);
    res.status(500).json({ error: 'Error al eliminar la imagen' });
  }
};

module.exports = {
  getAllUsers,
  signUpUserFail,
  getUserById,
  editUser,
  deleteUser,
  login,
  signUpUser,
  loginFail,
  getAllUsersToDashboard,
  logoutUser,
  deleteImageUser
};
