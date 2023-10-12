const Usuario = require("../models/Usuario");
const jwt = require("jsonwebtoken");

async function getAll() {
  try {
    const usuarios = await Usuario.find();
    return usuarios;
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener los usuarios");
  }
}

async function signUp(nombre, email, password) {
  try {
    const usuario = new Usuario();
    usuario.nombre = nombre;
    usuario.email = email;
    usuario.password = password;
    await usuario.save();
    return "Usuario creado con éxito";
  } catch (error) {
    console.log(error);
    throw new Error("Error al crear el usuario");
  }
}

async function login(email) {
  const usuario = await Usuario.findOne({
    email: email,
  });
  
  const token = jwt.sign(
    {
      id: usuario._id,
    },
    "ClaveUltraSecreta"
  );
  return { accessToken: token };
}

async function getById(id) {
  try {
    const usuario = await Usuario.findById(id);
    if (!usuario) {
      return "Usuario no encontrado";
    }
    return usuario;
  } catch (error) {
    throw new Error("Error al obtener el usuario");
  }
}

async function edit(
  id,
  nombre,
  email,
  password,
  avatar,
  location_lat,
  location_lng,
  localidad_id
) {
  try {
    const usuario = await Usuario.findById(id);
    if (usuario) {
      try {
        if (localidad_id) usuario.localidad_id = localidad_id;
        if (nombre) usuario.nombre = nombre;
        if (email) usuario.email = email;
        if (password) usuario.password = password;
        if (location_lat) usuario.location_lat = location_lat;
        if (location_lng) usuario.location_lng = location_lng;
        if (avatar) usuario.avatar = avatar;
        const usuarioEditado = await usuario.save();
        return usuarioEditado;
      } catch (error) {
        throw new Error("Error al editar el usuario");
      }
    } else {
      return "Usuario no encontrado";
    }
  } catch (error) {
    throw new Error("Error al editar el usuario");
  }
}

async function deleteUsuario(id) {
  try {
    const usuario = await Usuario.findByPk(id);
    if (usuario) {
      await usuario.destroy();
      return "Usuario eliminado";
    } else {
      return "Usuario no encontrado";
    }
  } catch (error) {
    throw new Error("Error al obtener el usuario");
  }
}

async function getByEmail(email) {
  try {
    const usuario = await Usuario.findOne({
      where: {
        email: email,
      },
    });
    if (usuario) {
      return usuario;
    } else {
      return "Usuario no encontrado";
    }
  } catch (err) {
    console.log(err);
    throw new Error("Email inexistente");
  }
}

module.exports = {
  getAll,
  signUp,
  getByEmail,
  edit,
  deleteUsuario,
  login,
  getById,
};
