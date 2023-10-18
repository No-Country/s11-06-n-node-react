const {Schema, model} = require('mongoose');


const schema = new Schema ({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    password: {
        type: String,
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
        require: true
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

