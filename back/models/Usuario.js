const {Schema, model} = require('mongoose');


const schema = new Schema ({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    pais: {
        type: String,   
    },
    fecha_nacimiento: {
        type: Date
    },
    celular: {
        type: String
    },
    location_lat: {
        type: String,
    },
    location_lng: {
        type: String
    }, 
    avatar_url: {
        type: String
    }
}, {
    timestamps: false
})

const Usuario = model('Usuario', schema);

module.exports = Usuario

