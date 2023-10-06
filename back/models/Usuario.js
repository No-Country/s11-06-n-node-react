const {dbInstance} = require('../options/mysql.config');
const {Model, DataTypes} = require('sequelize')


class Usuario extends Model {} 

Usuario.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        unique: true,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    localidad_id: {
        type: DataTypes.INTEGER,
        /* references: {
        model: 'Localidad',
        key: 'id',
      }, */
        
    },
    location_lat: {
        type: DataTypes.STRING,
    },
    location_lng: {
        type: DataTypes.STRING
    }
}, {
    sequelize: dbInstance,
    modelName: "usuario",
    createdAt: false,
    updatedAt: false
})

module.exports = {Usuario}


