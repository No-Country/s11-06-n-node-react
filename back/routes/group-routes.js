const express = require('express');

const router = express.Router();
const GroupControllers = require('../controllers/group-controllers');
// const { isAuthenticated } = require('../middleware/middlewares');
// const passport = require('passport')

router.get('/', GroupControllers.getAll);
router.post('/', GroupControllers.createNewGroup);
router.get('/:id', GroupControllers.getById);
router.put('/', GroupControllers.updateGroup);
// router.delete('/:id', isAuthenticated,  UsuarioControllers.deleteUsuario);
// router.post('/login', passport.authenticate('login', {failureRedirect: "/usuarios/loginFail"}),  UsuarioControllers.login);
// router.post('/loginFail', UsuarioControllers.loginFail)

module.exports = router;
