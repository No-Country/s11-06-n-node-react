const { Server } = require("socket.io");
const Chat = require("../models/chat.model");
const User = require("../models/user.model");

const getHistoryById = async (id) => {
  const history = await Chat.findById({ _id: id });
  let messages = await Promise.all(
    history.messages.map(async (msg) => {
      let user = await User.findById(msg.idUser).select(
        "name lastname avatar idUser"
      );
      if (user) {
        let { text, date } = msg;
        let message = { text, date };
        return { user, message };
      }
    })
  );
  let { idUser1, idUser2, _id } = history;
  return { messages, idUser1, idUser2, _id };
};

const addMessage = async (id, message) => {
  try {
    const updatedChat = await Chat.findById(id);
    let text = message.message.text;
    let date = new Date(message.message.date);
    let idUser = message.user.idUser;
    let objMsg = { text, date, idUser };
    updatedChat.messages.push(objMsg);
    let user = await User.findById(idUser).select(
      "name lastname avatar idUser"
    );
    if (user) {
      updatedChat.save();
      let newMessage = {user, message: {text, date}}
      return newMessage;
    }
  } catch (error) {
    console.error("Error en addMessages:", error);
    throw new Error("Error al editar el historial de chat");
  }
};

function setupWebSocket(server) {
  const io = new Server(server /* , {path: '/chat'} */);
  let id;
  io.on("connection", async (socket) => {
    socket.on("joinChat", async (chatId) => {
      id = chatId;
      socket.join(chatId);
      const chatHistory = await getHistoryById(chatId);
      if (chatHistory) {
        socket.emit("log", chatHistory);
      }
     
    });
    socket.on("message", async (data) => {
      let savedMessage = await addMessage(id, data);
      io.to(id).emit("log", savedMessage);
    });
  });
}

module.exports = setupWebSocket;
