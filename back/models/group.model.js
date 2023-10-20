const {Schema, model} = require('mongoose');
const validStatusValues = ["activo", "inactivo", "eliminado"];

const GroupSchema = new Schema ({
    
    name: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    users_common: {
        type: Array,   
    },
    users_admin: {
        type: Array
    },
    usuarios_pending: {
        type: Array
    },
    description: {
        type: String
    },
    status: {
        type: String,
        enum: validStatusValues,
        required: true,
        default: "activo"
    }
}, {
    timestamps: false
})

const Group = model('Group', GroupSchema, 'groups');

module.exports = Group