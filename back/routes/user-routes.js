const express = require("express");
const { body } = require("express-validator");

const router = express.Router();
const UserControllers = require("../controllers/user-controllers");
const { isAuthenticated } = require("../middleware/middlewares");
const passport = require("passport");
const { validateErrors } = require("../middleware/validateErrors");

router.get("/", isAuthenticated, UserControllers.getAllUsers);
router.post(
  "/",
  [
    body("email").notEmpty().isString(),
    body("password").notEmpty().isString(),
    body("name").notEmpty().isString(),
    body("lastname").notEmpty().isString(),
  ],
  validateErrors,
  passport.authenticate("register", { failureRedirect: "/users/registerFail" }),
  UserControllers.signUpUser
);

router.post("/registerFail", UserControllers.signUpUserFail);
router.get("/dashboard", UserControllers.getAllUsersToDashboard);
router.get("/logout/:id", isAuthenticated, UserControllers.logoutUser);
router.post(
  "/login",
  [body("email").notEmpty().isString(), body("password").notEmpty().isString()],
  validateErrors,
  passport.authenticate("login", { failureRedirect: "/users/loginFail" }),
  UserControllers.login
);
router.post("/loginFail", UserControllers.loginFail);
router.put("/", isAuthenticated, [
    body('name').optional().isString(),
    body('lastname').optional().isString(),
    body('email').optional().isString(),
    body('password').optional().isString(),
    body('location').optional().isString(),
    body('avatar').optional().isString(),
    body('birthdate').optional().isString(),
    body('language').optional().isArray(),
    body('phone').optional().isString(),
], validateErrors, UserControllers.editUser);
router.get("/:id", isAuthenticated, UserControllers.getUserById);
router.put("/:id", isAuthenticated, UserControllers.deleteUser);
router.delete("/eliminar-imagen/:publicId", UserControllers.deleteImageUser);

module.exports = router;
