const express = require("express");

const router = express.Router();
const FlagsControllers = require("../controllers/FlagsControllers");

router.get("/", FlagsControllers.getAllFlags);

module.exports = router;