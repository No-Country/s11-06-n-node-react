const Chat = require("../models/chat.model");
const mongoose = require("mongoose");
const User = require("../models/user.model");



const findOrCreateChatId = async (idUser1, idUser2) => {
    try {
      const history = await Chat.findOne({
        idUsers: { $all: [idUser1, idUser2] },
      });
      if (!history) {
        let newChat = new Chat();
        newChat.idUsers.push(idUser1, idUser2)
        newChat.save();
        return newChat._id
      } else {
        return history._id
      }
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  findOrCreateChatId,
};
