const mongoose = require("mongoose");
const User = require("./user.model");
const { Schema, model } = require("mongoose");

const chatSchema = new Schema({
  messages: [
    {
      text: {
        type: String,
      },
      date: {
        type: Date,
      },
      idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
      },
    },
  ],
  idUsers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: User,
    },
  ],
});

const Chat = model("Chat", chatSchema);

module.exports = Chat;
