const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function getAll() {
  try {
    const usuarios = await User.find({ status: { $in: ["habilitado", "conectado"]} })

    return usuarios;
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener los usuarios");
  }
}

async function getAllToDashboard() {
  try {
    const usuarios = await User.find().select('name lastname avatar location languages');;
    return usuarios;
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener los usuarios");
  }
}

async function signUp(name, email, password) {
  try {
    const usuario = new User();
    usuario.name = name;
    usuario.email = email;
    usuario.password = password;
    usuario.status = habilitado
    await usuario.save();
    return "Usuario creado con éxito";
  } catch (error) {
    console.log(error);
    throw new Error("Error al crear el usuario");
  }
}

async function login(email) {
  const usuario = await User.findOne({
    email: email,
  });
  const token = jwt.sign(
    {
      id: usuario._id,
    },
    "ClaveUltraSecreta"
  );
  usuario.status = "conectado"
  usuario.save()
  return { accessToken: token, usuario };
}

async function getById(id) {
  try {
    const usuario = await User.findById(id);
    if (!usuario || usuario.status == "deshabilitado") {
      return "Usuario no encontrado";
    }
  
    return usuario;
  } catch (error) {
    throw new Error("Error al obtener el usuario");
  }
}

async function edit(
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
) {
  try {
    const usuario = await User.findById(id);
    if (usuario && usuario.status !== "deshabilitado") {
      try {
        if (name) usuario.name = name;
        if (lastname) usuario.lastname = lastname;
        if (email) usuario.email = email;
        if (password) usuario.password = password;
        if (avatar) usuario.avatar = avatar;
        if (location) usuario.location = location;
        if (languages) usuario.languages = languages
        if (birthdate) usuario.birthdate = birthdate
        if (phone) usuario.phone = phone
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

async function deleteUser(id) {
  try {
    const usuario = await User.findById(id);
    if (usuario && usuario.status !== "deshabilitado") {
      usuario.status = "deshabilitado"
      await usuario.save()
      return "Usuario eliminado";
    } else {
      return "Usuario no encontrado";
    }
  } catch (error) {
    throw new Error("Error al obtener el usuario");
  }
}

async function logout(id) {
  try {
    const usuario = await User.findById(id);
    if (usuario && usuario.status !== "deshabilitado") {
      usuario.status = "desconectado"
      await usuario.save()
      console.log(usuario)
      return "Usuario desconectado";
    } else {
      return "Usuario no encontrado";
    }
  } catch (error) {
    throw new Error("Error al obtener el usuario");
  }
}

module.exports = {
  getAll,
  signUp,
  edit,
  deleteUser,
  login,
  getById,
  getAllToDashboard,
  logout
};
