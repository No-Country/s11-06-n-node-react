const express = require('express');

const router = express.Router();
const GroupControllers = require('../controllers/group-controllers');
// const { isAuthenticated } = require('../middleware/middlewares');
// const passport = require('passport')

router.get('/', GroupControllers.getAll);
router.post('/', GroupControllers.createNewGroup);
router.get('/:id', GroupControllers.getById);
router.put('/', GroupControllers.updateGroup);
router.delete('/:id',  GroupControllers.deleteGroupStatus);
//ruta para agregar un usuario a undeterminado grupo 
router.post('/add-user', GroupControllers.addUserToGroup);
// ruta para traer grupos de un usuario query
router.get('/user/:userId', GroupControllers.getAllByIdUser);
router.delete('/leave/:groupId/:userId', GroupControllers.leaveGroup);

module.exports = router;
