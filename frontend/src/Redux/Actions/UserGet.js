import { getAuth } from "../../utils/checkAuth";
import {
    getUsers, postUser, getDetailUser,  modifyUser, getUserGroups, getUserEvents, logOut, getUserNews
} from "../Actions/UserSlice";
import axios from "axios";


//GET para traer todos los usuarios logueados
const getAllUsers= () => {
	return async (dispatch) => {
		try {
			const config = await getAuth()
			// console.log(config);
			const dbData = await axios.get(`${import.meta.env.VITE_API_URL}/users`,config);			
			dispatch(getUsers(dbData.data));
		} catch (error) {
			console.error(error);
		}
	};
};

 //GET para mostrar los datos del Usuario
const getUserDetail = (actualUser) => {
	return async (dispatch) => {
		try {
      const config = {
        headers: {
          Authorization: `Bearer ${actualUser.accessToken}`,
        },
      };
			const dbData = await axios.get(`${import.meta.env.VITE_API_URL}/users/${actualUser.user._id}`, config);
			dispatch(getDetailUser(dbData.data));
		} catch (error) {
			console.error(error);
		}
	};
};

//POST para el register de un usuario
const userPost = (userData) => {
  return async (dispatch) => {
    
    try {
       const response = await axios.post(`${import.meta.env.VITE_API_URL}/users`, userData);
       dispatch(postUser(response.data));
    } catch (error) {
      console.error(error);
      
    }
  };
};


  //PUT para modificar datos del user

const modifyTheUser = (user, token) => {
    return async (dispatch) => {
        try {
          
            if (!user) {
                throw new Error("New user is undefined.");
              }
              const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
            const dbData = await axios.put(`${import.meta.env.VITE_API_URL}/users`, user, config);
            return dispatch(modifyUser(dbData.data));
        } catch (error) {
          console.error(error);
        }
    };
};

const getGroupsUser = (actualUser) => {
	return async (dispatch) => {
		try {
			const dbData = await axios.get(`${import.meta.env.VITE_API_URL}/groups/user/${actualUser.user._id}`);
			dispatch(getUserGroups(dbData.data));
		} catch (error) {
			console.error(error);
		}
	};
};
const getEventsUser = (actualUser) => {
	return async (dispatch) => {
		try {
			const dbData = (await axios.get(`https://s11-06-n-node-react-back.onrender.com/events/user/${actualUser.user._id}`));
    //   console.log(dbData.data);
			dispatch(getUserEvents(dbData.data));
		} catch (error) {
			console.error(error);
		}
	};
};

const getNewsUser = (actualUser) => {
	return async (dispatch) => {
		try {
      if (!actualUser) {
        throw new Error("New user is undefined.");
  };
			const dbData = (await axios.get(`https://s11-06-n-node-react-back.onrender.com/news/user/${actualUser.user._id}`));
    //   console.log("news user",dbData.data);
			dispatch(getUserNews(dbData.data));
		} catch (error) {
			console.error(error);
		}
	};
};

//https://s11-06-n-node-react-back.onrender.com/new/user/:id
//Traer todas las noticias del usuario
// https://s11-06-n-node-react-back.onrender.com/documentation/new/user/:id

const logOutUser= (user, config) => {
	return async (dispatch) => {
		try {	

			// const config = await getAuth()
			// console.log("config",config);
			const dbData = await axios.get(`${import.meta.env.VITE_API_URL}/users/logout/${user.user._id}`,config);	
			// console.log(dbData);
			if(dbData == "Usuario desconectado"){
				await dispatch(logOut());
			}
			
		} catch (error) {
			console.error(error);
		}
	};
};


export{
    getAllUsers,
    getUserDetail,
    userPost,
    modifyTheUser,
    getGroupsUser,
    logOutUser,
    getEventsUser,
    getNewsUser
}