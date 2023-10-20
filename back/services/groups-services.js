const Group = require("../models/group.model");
const User = require("../models/user.model");
// const jwt = require("jsonwebtoken");

async function getAllGroups() {
  try {
    const groups = await Group.find();
    // console.log(groups)
    return groups;
  } catch (error) {
    // console.log(error);
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

async function createGroup(name, image, idUser) {
  try {
    const newGroup = new Group();
    newGroup.name = name;
    newGroup.image = image;
    newGroup.users_admin = [idUser];
    await newGroup.save();
    return `Grupo ${name} creado con éxito`;
  } catch (error) {
    // console.log(error);
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

async function getGroupById(id) {
  try {
    const groupFound = await Group.findById(id);
    if (!groupFound) {
      return "Grupo no encontrado";
    }
    return groupFound;
  } catch (error) {
    throw new Error("Error al obtener el usuario");
  }
}

async function editGroup(
  id,
  name,
  image,
  users_common,
  users_admin,
  usuarios_pending,
  description,
  status
) {
  try {
    const group = await Group.findById(id);
    if (group) {
      try {
        if (name) group.name = name;
        if (image) group.image = image;
        if (users_common) group.users_common = users_common;
        if (users_admin) group.users_admin = users_admin;
        if (usuarios_pending) group.usuarios_pending = usuarios_pending;
        if (description) group.description = description;
        if (status) group.status = status
        const editedGroup = await group.save();
        return editedGroup;
      } catch (error) {
        throw new Error("Error al editar el grupo");
      }
    } else {
      return "Grupo no encontrado";
    }
  } catch (error) {
    throw new Error("Error al editar el Grupo");
  }
}

//borrado logico
async function deleteGroup(id) {
  try {
    const group = await Group.findById(id);
    if (group) {
  group.status = "eliminado"
  const groupDelete = await group.save();
      return groupDelete;
    } else {
      return "Grupo no encontrado";
    }
  } catch (error) {
    throw new Error("Error al obtener el grupo");
  }
}

//eliminar permanentemente
// async function deleteGroup(id) {
//   try {
//     const group = await Group.findById(id);
//     if (group) {
//       await group.destroy();
//       return "Grupo eliminado";
//     } else {
//       return "Grupo no encontrado";
//     }
//   } catch (error) {
//     throw new Error("Error al obtener el grupo");
//   }
// }
async function addToGroup(groupId,userId){
  console.log(groupId,userId);
  try {
    const group = await Group.findById(groupId);
    const user = await User.findById(userId);
    console.log(user);
    if(!user || !group){ return "No se encuentra grupo o usuario en la base de datos"}
    if(group.users_common.includes(userId)){ return "El usuario ya se encuentra en el grupo"}
    group.users_common.push(userId);
    await group.save();
    return group
    } catch (error) {
    throw new Error("Error al agregar usuario");
  }
}


module.exports = {
  getAllGroups,
  createGroup,
  getGroupById,
  editGroup,
  deleteGroup,
  addToGroup

};
