const express = require('express');

const router = express.Router();
const UsuarioControllers = require('../controllers/usuario-controllers');
const { isAuthenticated } = require('../middleware/middlewares');
const passport = require('passport')

router.get('/',  isAuthenticated,  UsuarioControllers.getAllUsuarios);
router.post('/', passport.authenticate('register', {failureRedirect: '/usuarios/registerFail'}), UsuarioControllers.signUpUsuario);
router.post('/registerFail', UsuarioControllers.signUpUsuarioFail)
router.get('/dashboard', UsuarioControllers.getAllUsuariosToDashboard);
router.get('/logout/:id', isAuthenticated, UsuarioControllers.logoutUsuario)
router.post('/login', passport.authenticate('login', {failureRedirect: "/usuarios/loginFail"}),  UsuarioControllers.login);
router.post('/loginFail', UsuarioControllers.loginFail)
router.put('/', isAuthenticated,  UsuarioControllers.editUsuario);
router.get('/:id', isAuthenticated,  UsuarioControllers.getUsuarioById);
router.put('/:id', isAuthenticated,  UsuarioControllers.deleteUsuario);

module.exports = router;
