const mongoose = require('mongoose')
const User = require('./user.model')

const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    locationLat: {
        type: String,
        required: true,
    },
    locationLong: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: User
    }
});

const Event = model("Event", eventSchema);

module.exports = Event;