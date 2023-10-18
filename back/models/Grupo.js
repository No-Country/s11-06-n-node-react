const {Schema, model} = require('mongoose');
const validStatusValues = ["activo", "inactivo", "eliminado"];

const schema = new Schema ({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        unique: true,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: String,
        required: true
    },
    imagen: {
        type: String
    },
    usuarios_comunes: {
        type: Array,   
    },
    usuarios_admin: {
        type: Array
    },
    usuarios_pendientes: {
        type: Array
    },
    descripcion: {
        type: Text
    },
    status: {
        type: String,
        enum: validStatusValues,
        required: true
    }
}, {
    timestamps: false
})

const Grupo = model('Grupo', schema);

module.exports = Grupo