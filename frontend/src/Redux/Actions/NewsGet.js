import {
    getNews, postNews, getDetailNews,  modifyNews, addCommentToNews
} from "../Actions/NewsSlice";
import axios from "axios";


//GET para traer todas las noticias

const getAllNews= () => {
	return async (dispatch) => {
		try {
			const dbData = (await axios.get(`${import.meta.env.VITE_API_URL}/news`)).data;			
			return dispatch(getNews(dbData));
		} catch (error) {
			alert({error: error.message});
		}
	};
};

 //GET para traer una noticia por Id
const getDetailNew = (id) => {
	return async (dispatch) => {
		try {
			const dbData = (await axios.get(`${import.meta.env.VITE_API_URL}/news/${id}`)).data;
			dispatch(getDetailNews(dbData));
		} catch (error) {
			alert({error: error.message});
		}
	};
};

//POST para postear una noticia nueva

const newsPost = (newData) => {
  return async (dispatch) => {
    try {
       const response = await axios.post(`${import.meta.env.VITE_API_URL}/news`, newData);
       dispatch(postNews(response.data));
    } catch (error) {
      console.error(error);
      alert({ error: error.message });
    }
  };
};

  //PUT para modificar una noticia

const modifyTheNew = (id, news) => {
    return async (dispatch) => {
        try {
            if (!news) {
                throw new Error("New new is undefined.");
              }
            const dbData = await axios.put(`${import.meta.env.VITE_API_URL}/news/${id}`, news);
            return dispatch(modifyNews(dbData));
        } catch (error) {
            alert({error: error.message});
        }
    };
};


//PUT para agregar un comentario a la noticia
const addCommentToNewsOnServer = (newsId, comment) => {
    return async (dispatch) => {
        try {
            const response = await axios.put(`${import.meta.env.VITE_API_URL}/documentation/#/News/put_news__id__comment/${newsId}`, { comment });
            dispatch(addCommentToNews({ newsId, comment: response.data }));
        } catch (error) {
            console.error(error);
            alert({ error: error.message });
        }
    };
};

export{
    getAllNews,
    getDetailNew,
    newsPost,
    modifyTheNew,
    addCommentToNewsOnServer
}