const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function getAll() {
  try {
    const users = await User.find({
      status: { $in: ["habilitado", "conectado"] },
    });

    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener los usuarios");
  }
}

async function getAllToDashboard() {
  try {
    const users = await User.find({ status: "conectado" }).select(
      "name lastname avatar location languages"
    );
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener los usuarios");
  }
}

async function signUp(name, email, password) {
  try {
    const user = new User();
    user.name = name;
    user.email = email;
    user.password = password;
    user.status = habilitado;
    await user.save();
    return "Usuario creado con éxito";
  } catch (error) {
    console.log(error);
    throw new Error("Error al crear el usuario");
  }
}

async function login(email) {
  try {
    const user = await User.findOne({
      email: email,
    });
    const token = jwt.sign(
      {
        id: user._id,
      },
      "ClaveUltraSecreta"
    );
    user.status = "conectado";
    user.save();
    return { accessToken: token, user };
  } catch (err) {
    throw new Error(err);
  }
}

async function getById(id) {
  try {
    const user = await User.findById(id);
    if (!user || user.status == "deshabilitado") {
      return "Usuario no encontrado";
    }

    return user;
  } catch (error) {
    throw new Error("Error al obtener el usuario");
  }
}

async function edit(
  id,
  name,
  lastname,
  password,
  avatar,
  location,
  languages,
  birthdate,
  phone
) {
  try {
    const user = await User.findById(id);
    if (user && user.status !== "deshabilitado") {
      try {
        if (name) user.name = name;
        if (lastname) user.lastname = lastname;
        if (password) user.password = password;
        if (avatar) user.avatar = avatar;
        if (location) user.location = location;
        if (languages) user.languages = languages;
        if (birthdate) user.birthdate = birthdate;
        if (phone) user.phone = phone;
        const usuarioEditado = await user.save();
        return usuarioEditado;
      } catch (error) {
        throw new Error(error);
      }
    } else {
      return "Usuario no encontrado";
    }
  } catch (error) {
    throw new Error(error);
  }
}

async function deleteUser(id) {
  try {
    const user = await User.findById(id);
    if (user && user.status !== "deshabilitado") {
      user.status = "deshabilitado";
      await user.save();
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
    const user = await User.findById(id);
    if (user && user.status !== "deshabilitado") {
      user.status = "desconectado";
      await user.save();
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
  logout,
};
