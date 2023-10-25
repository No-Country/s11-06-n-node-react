const mongoose = require('mongoose')
const Usuario = require('./Usuario')

const { Schema, model } = require("mongoose");

const activitySchema = new Schema({
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
        ref: Usuario
    }
});

const Activity = model("Activity", activitySchema);

module.exports = Activity;