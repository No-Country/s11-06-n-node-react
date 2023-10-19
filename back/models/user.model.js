const {Schema, model} = require('mongoose');


const schema = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    location: {
        type: String,   
    },
    birthdate: {
        type: Date
    },
    phone: {
        type: String
    },
    lastname: {
        type: String,
        require: true
    },
    languages: {
        type: Array,
    }, 
    avatar: {
        type: String
    }, 
    status: {
        type: String
    }
}, {
    timestamps: false
})

const User = model('users', schema);

module.exports = User

