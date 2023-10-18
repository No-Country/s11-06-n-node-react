const Grupo = require("../models/Grupos");
// const jwt = require("jsonwebtoken");

async function getAllGrupos() {
  try {
    const grupos = await Grupo.find();
    console.log(grupos)
    return grupos;
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener los grupos");
  }
}

// async function getAllToDashboard() {
//   try {
//     const usuarios = await Usuario.find().select('nombre apellido avatar pais idiomas');;
//     return usuarios;
//   } catch (error) {
//     console.log(error);
//     throw new Error("Error al obtener los usuarios");
//   }
// }

async function createGrupo(nombre, imagen, idUsuario) {
  try {
    const nuevoGrupo = new Grupo();
    nuevoGrupo.nombre = nombre;
    nuevoGrupo.imagen = imagen;
    nuevoGrupo.usuarios_admin = [idUsuario];
    await nuevoGrupo.save();
    return "Grupo creado con éxito";
  } catch (error) {
    console.log(error);
    throw new Error("Error al crear el grupo");
  }
}

// async function login(email) {
//   const usuario = await Usuario.findOne({
//     email: email,
//   });
  
//   const token = jwt.sign(
//     {
//       id: usuario._id,
//     },
//     "ClaveUltraSecreta"
//   );
//   usuario.status = "conectado"
//   usuario.save()
//   return { accessToken: token, usuario };
// }

// async function getById(id) {
//   try {
//     const usuario = await Usuario.findById(id);
//     if (!usuario) {
//       return "Usuario no encontrado";
//     }
//     return usuario;
//   } catch (error) {
//     throw new Error("Error al obtener el usuario");
//   }
// }

// async function edit(
//   id,
//   nombre,
//   apellido,
//   email,
//   password,
//   avatar,
//   pais,
//   idiomas,
//   fecha_nacimiento,
//   celular
// ) {
//   try {
//     const usuario = await Usuario.findById(id);
//     if (usuario) {
//       try {
//         if (nombre) usuario.nombre = nombre;
//         if (apellido) usuario.apellido = apellido;
//         if (email) usuario.email = email;
//         if (password) usuario.password = password;
//         if (avatar) usuario.avatar = avatar;
//         if (pais) usuario.pais = pais;
//         if (idiomas) usuario.idiomas = idiomas
//         if (fecha_nacimiento) usuario.fecha_nacimiento = fecha_nacimiento
//         if (celular) usuario.celular = celular
//         const usuarioEditado = await usuario.save();
//         return usuarioEditado;
//       } catch (error) {
//         throw new Error("Error al editar el usuario");
//       }
//     } else {
//       return "Usuario no encontrado";
//     }
//   } catch (error) {
//     throw new Error("Error al editar el usuario");
//   }
// }

// async function deleteUsuario(id) {
//   try {
//     const usuario = await Usuario.findById(id);
//     if (usuario) {
//       await usuario.destroy();
//       return "Usuario eliminado";
//     } else {
//       return "Usuario no encontrado";
//     }
//   } catch (error) {
//     throw new Error("Error al obtener el usuario");
//   }
// }



module.exports = {
  getAllGrupos,
  createGrupo,

};
