const express = require('express');

const router = express.Router();
const UsuarioControllers = require('../controllers/usuario-controllers');
const { isAuthenticated } = require('../middleware/middlewares');

router.get('/', isAuthenticated, UsuarioControllers.getAllUsuarios);
router.post('/', UsuarioControllers.signUpUsuario);
router.get('/:id', isAuthenticated,  UsuarioControllers.getUsuarioById);
router.put('/', isAuthenticated,  UsuarioControllers.editUsuario);
router.delete('/:id', isAuthenticated,  UsuarioControllers.deleteUsuario);
router.post('/login', UsuarioControllers.login);
router.get('/email/:email', UsuarioControllers.getUsuarioByEmail)

module.exports = router;
