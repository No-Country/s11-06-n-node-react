const { response } = require("express");
const Group = require("../models/group.model");
const User = require("../models/user.model");
const GroupsServices = require("../services/groups-services");

// Obtener todos los grupos
async function getAll(req, res) {
  try {
    const groups = await GroupsServices.getAllGroups();
    // console.log(groups);
    res.status(200).send(groups);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

//crear un nuevo grupo
async function createNewGroup(req, res) {
  const { name, image, idUser, rules } = req.body;
  try {
    if (!name || !image ||  !idUser ) {
    return res.status(400).json({ message: "Faltan datos obligatorios para crear el grupo" });
  }else{
   const response = await GroupsServices.createGroup(name, image, idUser, rules)
   return res.status(200).json(response);
  }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
//Obtener grupo por Id
async function getById(req, res) {
  const { id } = req.params;
  console.log(id);
  try {
    const response = await GroupsServices.getGroupById(id);
    if (response == "Usuario no encontrado") {
      return res.status(404).json({ error: response });
    } else {
      return res.status(200).send(response);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Funcion para editar datos de un grupo
async function updateGroup(req, res) {
  const {
    id,
    name,
  image,
  users_common,
  users_admin,
  usuarios_pending,
  description,
  status,
  rules
  } = req.body;

  try {
    if (
      (name && typeof name !== "string") ||
      (image && typeof image !== "string") ||
      (description && typeof description !== "string") ||
      (status && typeof status !== "string") ||
      (rules && typeof rules !== "string")
    ) {
      return res.status(400).json({ message: "Tipos de datos incorrectos" });
    }
    const response = await GroupsServices.editGroup(
      id,
      name,
      image,
      users_common,
      users_admin,
      usuarios_pending,
      description,
      status,
      rules
    );
    if (response == "Grupo no encontrado") {
      return res.status(404).send({ error: response });
    }
    res.status(200).send(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
// Borrado logico del grupo

async function deleteGroupStatus(req, res) {
  const { id } = req.params;
  try {
    const response = await GroupsServices.deleteGroup(id);
    if (response == "Grupo no encontrado") {
      return res.status(404).send({ error: response });
    }
    res.status(200).send(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// agregar usuario a grupo
const addUserToGroup = async (req, res) => {
  try {

    const groupId = req.query.groupId;
    const userId = req.query.userId;
    const response = await GroupsServices.addToGroup(groupId,userId);
    // verificar que existan
    if (response == "No se encuentra grupo o usuario en la base de datos") {
      return res.status(404).json({ message: 'Group or user not found' });
    }
    if (response == "El usuario ya se encuentra en el grupo") {
      return res.status(400).json({ message: 'User is already in the group' });
    }
    if (response == "El usuario ya se encuentra como administrador en el grupo") {
      return res.status(400).json({ message: 'The user is an administrator of the group' });
    }
    if (response == "Tú solicitud de unión al grupo está pendiente") {
      return res.status(400).json({ message: 'Your request is pending' });
    }
  
    return res.status(200).json({ message: 'User added to the group successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Obtener grupos de un usuario

async function getAllByIdUser(req, res) {
  try {
    const userId = req.params.userId;
    const groups = await GroupsServices.getAllGroupsByUser(userId);
    // console.log(groups);
    res.status(200).send(groups);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

// Dejar grupo

async function leaveGroup(req, res) {
  try {
    const userId = req.params.userId;
    const groupId = req.params.groupId;
    const response = await GroupsServices.leaveUserGroup(groupId, userId);
    // console.log(userId);
    // console.log(groupId);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

async function newMessage(req, res) {
  const { groupId, userId, message } = req.body;
  try {
    if (!groupId || !userId ||  !message ) {
    return res.status(400).json({ message: "Faltan datos obligatorios para crear el mensaje" });
  }else {
   const response = await GroupsServices.createMessage(groupId, userId, message)
   if(response == "Grupo no encontrado"){ return res.status(404).json({ message: 'Group is not in DB' });}
   res.status(200).json(response);
  }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  getAll,
  createNewGroup, 
  getById,
  updateGroup,
  deleteGroupStatus,
  addUserToGroup,
  getAllByIdUser,
  leaveGroup,
  newMessage
 
};
