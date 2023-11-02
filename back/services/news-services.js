const News = require("../models/news.model");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

async function getAll() {
  try {
    const news = await News.find();
    return news;
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener las noticias");
  }
}

async function getAllToDashboard() {
  try {
    const news = await News.find().select(
      "title description photo location idUser createdAt"
    );
    const arrayOfNews = await Promise.all(
      news.map(async (el) => {
        const user = await User.findOne({ _id: el.idUser });
        const newUser = {
          name: user.name,
          lastname: user.lastname,
          avatar: user.avatar,
        };
        return { ...el.toObject(), user: newUser };
      })
    );
    return arrayOfNews;
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener las noticias");
  }
}

async function getAllFromUser(id) {
  try {
    const news = await News.find({ idUser: id }).select(
      "title description photo location createdAt"
    );
    return news;
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener las noticias");
  }
}

async function postNews(title, description, location, photo, id) {
  try {
    const news = new News();
    news.title = title;
    news.description = description;
    news.photo = photo;
    news.location = location;
    news.idUser = id;
    await news.save();
    return "Noticia creada con éxito";
  } catch (error) {
    console.log(error);
    throw new Error("Error al crear la noticia");
  }
}

async function getById(id) {
  try {
    const news = await News.findById(id);
    const user = await User.findById(news.idUser);
    const newUser = {
      name: user.name,
      lastname: user.lastname,
      avatar: user.avatar,
    };
    const arrayOfComments = await Promise.all(
      news.comments.map(async (el) => {
        const user = await User.findById(el.idUser);
        const newUser = {
          name: user.name,
          lastname: user.lastname,
          avatar: user.avatar,
        };
        return { ...el, user: newUser };
      })
    );
    news.comments = arrayOfComments;
    return { ...news.toObject(), user: newUser };
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener las noticias");
  }
}

async function edit(id, title, photo, location, description, idUser) {
  try {
    const news = await News.findById(id);
    if (news && news.idUser == idUser) {
      try {
        if (title) news.title = title;
        if (photo) news.photo = photo;
        if (location) news.location = location;
        if (description) news.description = description;
        const noticiaEditada = await news.save();
        return noticiaEditada;
      } catch (error) {
        throw new Error("Error al editar la noticia");
      }
    } else {
      return "Noticia no encontrada";
    }
  } catch (error) {
    throw new Error("Error al editar la noticia");
  }
}

async function postComment(id, text, idUser) {
  try {
    const news = await News.findById(id);
    const date = new Date();
    let idComment;
    if (news.comments.length > 0) {
      idComment = news.comments[news.comments.length - 1].id + 1;
    } else {
      idComment = 1;
    }

    const comment = {
      idUser: idUser,
      text,
      date,
      id: idComment,
    };
    if (news) {
      try {
        news.comments.push(comment);
        const noticiaEditada = await news.save();
        const arrayOfComments = await Promise.all(
          noticiaEditada.comments.map(async (el) => {
            const user = await User.findById(el.idUser);
            const newUser = {
              name: user.name,
              lastname: user.lastname,
              avatar: user.avatar,
            };
            return { ...el, user: newUser };
          })
        );
        noticiaEditada.comments = arrayOfComments;
        return noticiaEditada;
      } catch (error) {
        console.log(error);
        throw new Error("Error al editar la noticia");
      }
    } else {
      return "Noticia no encontrada";
    }
  } catch (error) {
    throw new Error("Error al editar la noticia");
  }
}

async function deleteComment(idNews, idComment, idUser) {
  try {
    const news = await News.findById(idNews);
    if (news.idUser == idUser) {
      const comment = news.comments.find((el) => el.id == idComment);
      if (comment) {
        let updatedComments = news.comments.filter((el) => el.id != idComment);
        news.comments = updatedComments;
        await news.save();
        return "Se eliminó con éxito";
      }
    } else {
      return "Noticia no encontrada";
    }
  } catch (err) {
    throw new Error("Error al editar la noticia");
  }
}

async function deleteNews(id, idUser) {
  try {
    const news = await News.findById(id);
    if (news && news.idUser == idUser) {
      await News.deleteOne({ _id: id });
      return "Noticia eliminada";
    } else {
      return "Noticia no encontrada";
    }
  } catch (error) {
    throw new Error("Error al obtener la noticia");
  }
}

module.exports = {
  getAll,
  getAllFromUser,
  edit,
  postNews,
  getById,
  getAllToDashboard,
  deleteNews,
  postComment,
  deleteComment
};
