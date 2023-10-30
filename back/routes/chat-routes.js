const express = require("express");
const router = express.Router();
const ChatControllers = require("../controllers/chat-controllers");
const { isAuthenticated } = require("../middleware/middlewares");

router.get("/history/:idUser1/:idUser2", isAuthenticated, ChatControllers.findOrCreateChatId);
module.exports = router;
