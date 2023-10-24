import {
    getUsers, postUser, getDetailUser,  modifyUser
} from "../Actions/UserSlice";
import axios from "axios";


//GET para traer todos los usuarios logueados
const getAllUsers= () => {
	return async (dispatch) => {
		try {
			const dbData = (await axios.get(`https://s11-06-n-node-react-back.onrender.com/documentation/#/Users/get_users`)).data;			
			return dispatch(getUsers(dbData));
		} catch (error) {
			alert({error: error.message});
		}
	};
};

 //GET para mostrar los datos del Usuario
const getUserDetail = (id) => {
	return async (dispatch) => {
		try {
			const dbData = (await axios.get(`https://s11-06-n-node-react-back.onrender.com/documentation/#/Users/get_users__id_/${id}`)).data;
			dispatch(getDetailUser(dbData));
		} catch (error) {
			alert({error: error.message});
		}
	};
};

//POST para el loguin de un usuario nuevo
const userPost = (eventData) => {
  return async (dispatch) => {
    try {
       const response = await axios.post('https://s11-06-n-node-react-back.onrender.com/documentation/#/Users/post_users_login', eventData);
       dispatch(postUser(response.data));
    } catch (error) {
      console.error(error);
      alert({ error: error.message });
    }
  };
};


  //PUT para modificar datos del user

const modifyTheUser = (id, user) => {
    return async (dispatch) => {
        try {
            if (!user) {
                throw new Error("New user is undefined.");
              }
            const dbData = await axios.put(`https://s11-06-n-node-react-back.onrender.com/documentation/#/Users/put_users/${id}`, user);
            return dispatch(modifyUser(dbData));
        } catch (error) {
            alert({error: error.message});
        }
    };
};

export{
    getAllUsers,
    getUserDetail,
    userPost,
    modifyTheUser
}