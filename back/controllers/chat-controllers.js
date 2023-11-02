const ChatService = require("../services/chat-services");

const findOrCreateChatId = async (req, res) => {
  const { idUser1, idUser2 } = req.params;
  try {
    const response = await ChatService.findOrCreateChatId(idUser1, idUser2);
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Error interno del servidor" });
  }
};


module.exports = { findOrCreateChatId };
