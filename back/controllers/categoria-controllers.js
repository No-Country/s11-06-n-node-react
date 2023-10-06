const categoriaServices = require('../services/categorias-services');

async function getAllCategorias(req, res) {
  try {
    const categorias = await categoriaServices.getAll();
    res.status(200).send(categorias);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

async function getByIdCategoria(req, res) {
  const { id } = req.params;
  try {
    const response = await categoriaServices.getById(id);
    if (!response) {
      res.status(404).send({error: "Categoría no encontrada"})
    } else {
      res.status(200).send(response);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la categoría' });
  }
}


module.exports = {
  getAllCategorias, getByIdCategoria,
};
