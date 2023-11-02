const mongoose = require('mongoose');
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
    users_common: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // 'User' debe coincidir con el nombre del modelo de usuario
      }],
      users_admin: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
      }],
      users_pending: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }],
    messages: {
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
    },
    rules: {
        type: String
    }
}, {
    timestamps: false
})

const Group = model('Group', GroupSchema, 'groups');

module.exports = Group