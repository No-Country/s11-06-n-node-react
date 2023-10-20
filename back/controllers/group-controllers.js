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
  const { name, image, idUser } = req.body;
  try {
    if (!name || !image ||  !idUser ) {
    return res.status(400).json({ message: "Faltan datos obligatorios para crear el grupo" });
  }else{
   const response = await GroupsServices.createGroup(name, image, idUser)
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
  status
  } = req.body;

  try {
    if (
      (name && typeof name !== "string") ||
      (image && typeof image !== "string") ||
      (description && typeof description !== "string") ||
      (status && typeof status !== "string")
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
      status
    );
    if (response == "Grupo no encontrado") {
      return res.status(404).send({ error: response });
    }
    res.status(200).send(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

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
    return res.status(200).json({ message: 'User added to the group successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};




module.exports = {
  getAll,
  createNewGroup, 
  getById,
  updateGroup,
  deleteGroupStatus,
  addUserToGroup
 
};
