import {
    getUsers, postUser, getDetailUser,  modifyUser, getUserGroups, getUserEvents, logOut
} from "../Actions/UserSlice";
import axios from "axios";


//GET para traer todos los usuarios logueados
const getAllUsers= () => {
	return async (dispatch) => {
		try {
			const dbData = (await axios.get(`https://s11-06-n-node-react-back.onrender.com/users`));			
			dispatch(getUsers(dbData).data);
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
      // console.log(actualUser.accessToken);
      console.log(actualUser);
			const dbData = (await axios.get(`https://s11-06-n-node-react-back.onrender.com/users/${actualUser.user._id}`, config));
      // console.log(dbData.data);
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
       const response = await axios.post('https://s11-06-n-node-react-back.onrender.com/users', userData);
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
              // console.log(user);
            const dbData = await axios.put(`https://s11-06-n-node-react-back.onrender.com/users`, user, config);
            // console.log(dbData);
            return dispatch(modifyUser(dbData.data));
        } catch (error) {
          console.error(error);
        }
    };
};

const getGroupsUser = (actualUser) => {
	return async (dispatch) => {
		try {
      // console.log(actualUser.accessToken);
      // console.log(actualUser.usuario._id);
			const dbData = (await axios.get(`https://s11-06-n-node-react-back.onrender.com/groups/user/${actualUser.user._id}`));
      // console.log(dbData.data);
			dispatch(getUserGroups(dbData.data));
		} catch (error) {
			console.error(error);
		}
	};
};
const getEventsUser = (actualUser) => {
	return async (dispatch) => {
		try {
      
      // console.log(actualUser.accessToken);
      // console.log(actualUser.usuario._id);
			const dbData = (await axios.get(`https://s11-06-n-node-react-back.onrender.com/events/user/${actualUser.user._id}`));
      console.log(dbData.data);
			dispatch(getUserEvents(dbData.data));
		} catch (error) {
			console.error(error);
		}
	};
};


const logOutUser= () => {
	return async (dispatch) => {
		try {		
			dispatch(logOut());
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
    getEventsUser
}