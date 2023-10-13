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
        type: String
    },
    celular: {
        type: String
    },
    apellido: {
        type: String,
    },
    idiomas: {
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

const Usuario = model('Usuario', schema);

module.exports = Usuario

