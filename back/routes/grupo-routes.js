const express = require('express');

const router = express.Router();
const GrupoControllers = require('../controllers/grupo-controllers');
// const { isAuthenticated } = require('../middleware/middlewares');
const passport = require('passport')

router.get('/',  /*isAuthenticated,*/  GrupoControllers.getAllGrupos);
router.post('/', /*isAuthenticated,*/  GrupoControllers.createGrupo);
// router.post('/registerFail', UsuarioControllers.signUpUsuarioFail)
// router.get('/dashboard', UsuarioControllers.getAllUsuariosToDashboard);
// router.get('/:id', isAuthenticated,  UsuarioControllers.getUsuarioById);
// router.put('/', isAuthenticated,  UsuarioControllers.editUsuario);
// router.delete('/:id', isAuthenticated,  UsuarioControllers.deleteUsuario);
// router.post('/login', passport.authenticate('login', {failureRedirect: "/usuarios/loginFail"}),  UsuarioControllers.login);
// router.post('/loginFail', UsuarioControllers.loginFail)

module.exports = router;
