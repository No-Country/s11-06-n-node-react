import {
    getNews, postNews, getDetailNews,  modifyNews, addCommentToNews
} from "../Actions/NewsSlice";
import axios from "axios";

//GET para traer todas las noticias

const getAllNews= () => {
	return async (dispatch) => {
		try {
			const dbData = (await axios.get(`https://s11-06-n-node-react-back.onrender.com/documentation/#/News/get_news`)).data;			
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
			const dbData = (await axios.get(`https://s11-06-n-node-react-back.onrender.com/documentation/#/News/get_news__id_/${id}`)).data;
			dispatch(getDetailNews(dbData));
		} catch (error) {
			alert({error: error.message});
		}
	};
};

//POST para postear una noticia nueva

const newsPost = (eventData) => {
  return async (dispatch) => {
    try {
       const response = await axios.post('https://s11-06-n-node-react-back.onrender.com/documentation/#/News/post_news', eventData);
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
            const dbData = await axios.put(`https://s11-06-n-node-react-back.onrender.com/documentation/#/News/put_news__id_/${id}`, news);
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
            const response = await axios.put(`https://s11-06-n-node-react-back.onrender.com/documentation/#/News/put_news__id__comment/${newsId}`, { comment });
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