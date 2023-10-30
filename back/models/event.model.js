const mongoose = require('mongoose');
const User = require('./user.model');

const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: User,
    },
    topics: [String],
    description: String,
    reasons: [
        {
            title: String,
            description: String,
        }
    ],
    includes: [
        {
            title: String,
            description: [String],
        }
    ],
    youMustKnow: [
        {
            title: String,
            description: [String],
        }
    ],
});

const Event = model("Event", eventSchema);

module.exports = Event;
