const {dbInstance} = require('../options/mysql.config');
const {Model, DataTypes} = require('sequelize')


class Categoria extends Model {} 

Categoria.init({
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
    foto: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: dbInstance,
    modelName: "categorias",
    createdAt: false,
    updatedAt: false
})

module.exports = {Categoria}
