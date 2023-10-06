
class Categoria {
  constructor() {
  }

  async findAll() {
    try {
      const response = await knex.from('categorias').select('*');
      return response;
    } catch (err) {
      throw err;
    } finally {
      await knex.destroy();
    }
  }

  async findByPk(id) {
    try {
      const response = await knex.from('categorias').select('*').where('id', id);
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
