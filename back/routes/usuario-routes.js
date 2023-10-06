const express = require('express');

const router = express.Router();
const UsuarioControllers = require('../controllers/usuario-controllers');
const { isAuthenticated } = require('../middleware/middlewares');

router.get('/', UsuarioControllers.getAllUsuarios);
router.post('/', UsuarioControllers.signUpUsuario);
router.get('/:id',  UsuarioControllers.getUsuarioById);
router.put('/',  UsuarioControllers.editUsuario);
router.delete('/:id',  UsuarioControllers.deleteUsuario);
router.post('/login', UsuarioControllers.login);
router.get('/email/:email', UsuarioControllers.getUsuarioByEmail)

module.exports = router;
