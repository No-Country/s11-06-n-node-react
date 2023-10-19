const {Schema, model} = require('mongoose');
const User = require('./user.model');
const mongoose = require('mongoose')


const schema = new Schema ({
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
    },
    photo: {
        type: Array,   
    },
    description: {
        type: String
    },
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    comments: {
        type: Array
    }
    
}, {
    timestamps: true
})

const News = model('news', schema);

module.exports = News

