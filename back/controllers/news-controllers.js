const NewsServices = require("../services/news-services");

async function getAllNews(req, res) {
  try {
    const news = await NewsServices.getAll();
    res.status(200).send(news);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

async function getAllNewsToDashboard(req, res) {
  try {
    const news = await NewsServices.getAllToDashboard();
    res.status(200).send(news);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

async function getAllNewsFromUser(req, res) {
  const { id } = req.params;
  try {
    const news = await NewsServices.getAllFromUser(id);
    res.status(200).send(news);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

async function postNews(req, res) {
  const { id } = req.user;
  const { title, description, location, photo } = req.body;
  try {
    await NewsServices.postNews(title, description, location, photo, id);
    return res.status(201).send({ message: "Noticia creada con éxito" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
}

async function getNewsById(req, res) {
  const { id } = req.params;
  try {
    const response = await NewsServices.getById(id);
    if (response == "Noticia no encontrada") {
      return res.status(404).json({ error: response });
    } else {
      return res.status(200).send(response);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function editNews(req, res) {
  const {id} = req.params
  const { title, photo, location, description } = req.body;
  const { id: idUser } = req.user;
  try {
    if (
      (title && typeof title !== "string") ||
      (description && typeof description !== "string") ||
      (photo && !photo.length > 0) ||
      (location && typeof location !== "string")
    ) {
      return res.status(400).json({ message: "Tipos de datos incorrectos" });
    }
    const response = await NewsServices.edit(
      id,
      title,
      photo,
      location,
      description,
      idUser
    );
    if (response == "Noticia no encontrada") {
      return res.status(404).send({ error: response });
    }
    res.status(200).send(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function deleteNews(req, res) {
  const { id } = req.params;
  const { id: idUser } = req.user;
  try {
    const response = await NewsServices.deleteNews(id, idUser);
    if (response == "Noticia no encontrada") {
      res.status(404).send({ error: response });
    } else {
      res.status(200).send({ response });
    }
  } catch (error) {
    res.status(404).json({ error: "noticia no encontrada" });
  }
}

async function postComment(req, res) {
  const { id: idUser } = req.user;
  const { text } = req.body;
  const { id } = req.params;
  try {
    if (text && typeof text !== "string") {
      return res.status(400).json({ message: "Tipos de datos incorrectos" });
    }
    const response = await NewsServices.postComment(id, text, idUser);
    if (response == "Noticia no encontrada") {
      return res.status(404).send({ error: response });
    }
    res.status(200).send(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  getAllNews,
  getNewsById,
  editNews,
  deleteNews,
  getAllNewsToDashboard,
  postNews,
  getAllNewsFromUser,
  postComment,
};
