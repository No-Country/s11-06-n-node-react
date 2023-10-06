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


/* {
  constructor() {
  }

  async findAll() {
    try {
      const response = await knex.from('usuarios').select('*');
      return response;
    } catch (err) {
      throw err;
    } finally {
      await knex.destroy();
    }
  }

  async findByPk(id) {
    try {
      const response = await knex.from('usuarios').select('*').where('id', id);
      return response;
    } catch (err) {
      throw err;
    } finally {
      await knex.destroy();
    }
  }

  async findByEmail(email) {
    try {
        const response = await knex.from('usuarios').select('*').where("email", "=", email).first();
        console.log(response)
        return response;
      } catch (err) {
        throw err;
      } finally {
        await knex.destroy();
      }
  }

  async signUp(nombre, email, password) {
    const user = {
      nombre: nombre,
      email: email,
      password: password  
    };
  
    try {
      const response = await knex('usuarios').insert(user);
      return response;
    } catch (err) {
        console.log(err)
      throw err;
    } finally {
      await knex.destroy();
    }
  }

  async login(email, password) {
    try {
        const response = await knex.from('usuarios').select('*').where({email: email, password: password});
        return response;
      } catch (err) {
        throw err;
      } finally {
        await knex.destroy();
      }
  }

  async create(nombre, email, password) {
    let user = {nombre, email, password}
    console.log(user)

    try {
        const response = await knex.from('usuarios').insert(user);
        return response;
      } catch (err) {
        throw err;
      } finally {
        await knex.destroy();
      }
  }

  async edit(nombre, email, location_lat, localidad_id, location_lng, avatar, password) {
    let user = {nombre, email, location_lat, localidad_id, location_lng, avatar, password}
    try {
        const response = await knex.from('usuarios').update(user);
        return response;
      } catch (err) {
        throw err;
      } finally {
        await knex.destroy();
      }
  }

  async delete(id) {
    try {
        const response = await knex.from('usuarios').where({id}).del();
        return response;
      } catch (err) {
        throw err;
      } finally {
        await knex.destroy();
      }
  }

}

const categoria = new Categoria()
module.exports = categoria;
 */