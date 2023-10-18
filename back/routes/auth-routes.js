const express = require("express");
const passport = require("passport");
const router = express.Router();
const AuthControllers = require("../controllers/auth-controllers");
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/failure" }),
  AuthControllers.getGoogle
);

module.exports = router;
