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

async function getAllGroupsByUser(userId) {
  try {
    // Busco grupos en los tres arrays posibles
    const commonGroups = await Group.find({ users_common: userId });
    const adminGroups = await Group.find({ users_admin: userId });
    // const pendingGroups = await Group.find({ users_pending: userId });
            const allGroups = [...commonGroups, ...adminGroups];
    return allGroups;
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener los usuarios");
  }
}

async function createGroup(name, image, idUser, rules) {
  try {
    const findGroup = await Group.find({ name: name });
    if(findGroup.length){
      return "There is already a group with that name"
    }
    
    const newGroup = new Group();
    newGroup.name = name;
    newGroup.image = image;
    newGroup.users_admin = [idUser];
    newGroup.rules = rules;
    await newGroup.save();
    return `${name} group created successfully`;
  } catch (error) {
    // console.log(error);
    throw new Error("Error al crear el grupo");
  }
}



async function getGroupById(id) {
  try {
    const groupFound = await Group.findById(id);
    if (!groupFound) {
      return "Group not found";
    }
    return groupFound;
  } catch (error) {
    throw new Error("Error getting user");
  }
}

async function leaveUserGroup(groupId, userId) {
  try {
    const groupFound = await Group.findById(groupId);
    const userFound = await User.findById(userId);
console.log(groupFound);

    if (!groupFound) {
      return "Group not found";
    }
    if (!userFound) {
      return "User not found";
    }
    if (!groupFound.users_common.includes(userId) && !groupFound.users_admin.includes(userId) && !groupFound.users_pending.includes(userId)){
      return 'User is not a member of this group'
    }
    if(groupFound.users_common.includes(userId)){
      groupFound.users_common = groupFound.users_common.filter(id => id !== userId);
      await groupFound.save();
      return 'User has left the group'
    }
    if(groupFound.users_admin.includes(userId) && groupFound.users_admin.length > 1 ){
      groupFound.users_admin = groupFound.users_admin.filter(id => id !== userId);
      await groupFound.save();
      return 'User has left the group'
    }else{
      return 'The user is the only administrator of the group'
    }
  } catch (error) {
    throw new Error("Error getting user");
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
  status,
  rules
) {
  try {
    const group = await Group.findById(id);
    if (group) {
      try {
        if (name) group.name = name;
        if (image) group.image = image;
        if (users_common) group.users_common = users_common;
        if (users_admin) group.users_admin = users_admin;
        if (usuarios_pending) group.users_pending = usuarios_pending;
        if (description) group.description = description;
        if (status) group.status = status
        if (rules) group.rules = rules
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
    // console.log(user);
    if(!user || !group){ return "No se encuentra grupo o usuario en la base de datos"}
    if(group.users_common.includes(userId)){ return "El usuario ya se encuentra en el grupo"}
    if(group.users_admin.includes(userId)){ return "El usuario ya se encuentra como administrador en el grupo"}
    if(group.users_pending.includes(userId)){ return "Tú solicitud de unión al grupo está pendiente"}
    
    group.users_common.push(userId);
    await group.save();
    return group
    } catch (error) {
    throw new Error("Error al agregar usuario");
  }
}


async function createMessage(groupId, userId, message) {

  try {
    const group = await Group.findById(groupId);
    if (!group) {
      return "Grupo no encontrado";
    }
    const messageId = Date.now().toString() + Math.random().toString(36).substring(2, 8);
    const newMessage = {
      messageId: messageId, 
      userId: userId,
      message: message,
      createdAt: new Date()
  };
  group.messages.push(newMessage);
  await group.save();
  return "Message sent succesfully"

  } catch (error) {
    // console.log(error);
    throw new Error("Error al crear el grupo");
  }
}

module.exports = {
  getAllGroups,
  createGroup,
  getGroupById,
  editGroup,
  deleteGroup,
  addToGroup,
  getAllGroupsByUser,
  leaveUserGroup,
  createMessage

};