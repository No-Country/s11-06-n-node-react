const mongoose = require('mongoose')
const User = require('./user.model')

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

const Activity = model("Activity", activitySchema);

module.exports = Activity;