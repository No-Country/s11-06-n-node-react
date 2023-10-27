const express = require('express');

const router = express.Router();
const UserControllers = require('../controllers/user-controllers');
const { isAuthenticated } = require('../middleware/middlewares');
const passport = require('passport')

router.get('/',  isAuthenticated,  UserControllers.getAllUsers);
router.post('/', passport.authenticate('register', {failureRedirect: '/users/registerFail'}), UserControllers.signUpUser);
router.post('/registerFail', UserControllers.signUpUserFail)
router.get('/dashboard', UserControllers.getAllUsersToDashboard);
router.get('/logout/:id', isAuthenticated, UserControllers.logoutUser)
router.post('/login', passport.authenticate('login', {failureRedirect: "/users/loginFail"}),  UserControllers.login);
router.post('/loginFail', UserControllers.loginFail)
router.put('/', isAuthenticated,  UserControllers.editUser);
router.get('/:id', isAuthenticated,  UserControllers.getUserById);
router.put('/:id', isAuthenticated,  UserControllers.deleteUser);

module.exports = router;
