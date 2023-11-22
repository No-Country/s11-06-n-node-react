const express = require('express');

const router = express.Router();
const GroupControllers = require('../controllers/group-controllers');

//ruta para obtener todos los grupos
router.get('/', GroupControllers.getAll);
// ruta para crer grupo
router.post('/', GroupControllers.createNewGroup);
// ruta para obtener grupo por id
router.get('/:id', GroupControllers.getById);
// ruta para actualizar grupo
router.put('/', GroupControllers.updateGroup);
// ruta para borrar grupo
router.delete('/:id',  GroupControllers.deleteGroupStatus);
//ruta para agregar un usuario a undeterminado grupo 
router.post('/add-user', GroupControllers.addUserToGroup);
// ruta para traer grupos de un usuario query
router.get('/user/:userId', GroupControllers.getAllByIdUser);
//ruta para dejar grupo
router.delete('/leave/:groupId/:userId', GroupControllers.leaveGroup);
//ruta para agregar mensajes en un grupo
router.put('/message', GroupControllers.newMessage);
// ruta para eliminar un mensaje del grupo
router.delete('/message/:groupId/delete/:messageId', GroupControllers.deleteMensajeToGroup);
// aceptar usuario
router.put('/acceptpending/:groupId/accept/:userId', GroupControllers.acceptUser);

module.exports = router;
