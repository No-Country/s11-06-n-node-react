const Categoria = require('../models/Categoria')

async function getAll() {
  try {
    const categorias = await Categoria.findAll();
    return categorias;
  } catch (error) {
    console.log(error);
    throw new Error('Error al obtener las categorias');
  }
}

async function getById(id) {
  try {
    const categoria = await Categoria.findByPk(id);
    return categoria;
  } catch (error) {
    console.log(error)
    throw new Error('Error al obtener el cliente');
  }
}

module.exports = {
  getAll, getById,
};
