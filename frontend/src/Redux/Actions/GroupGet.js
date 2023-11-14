import {
    getGroups, postGroup, getDetailGroup,  modifyGroup, joinUserToGroup
} from "../Actions/GroupSlice";
import axios from "axios";


//GET mostramos todos los grupos
const getAllGroups= () => {
	return async (dispatch) => {
		try {
			const dbData = (await axios.get(`${import.meta.env.VITE_API_URL}/groups`)).data;			
			return dispatch(getGroups(dbData));
		} catch (error) {
			alert({error: error.message});
		}
	};
};

//GET a usuarios creados por el usuario


 //GET detalle de un grupo en particular, llamado por Id
const getGroupDetail = (id) => {
	return async (dispatch) => {
		try {
			const dbData = (await axios.get(`${import.meta.env.VITE_API_URL}/groups/${id}`)).data;
			dispatch(getDetailGroup(dbData));
		} catch (error) {
			alert({error: error.message});
		}
	};
};

//POST para crear un nuevo grupo
const groupPost = (eventData) => {
  console.log(eventData)
  return async (dispatch) => {
    try {
       const response = await axios.post(`${import.meta.env.VITE_API_URL}/groups`, eventData);
       console.log(response)
       dispatch(postGroup(response.data));
    } catch (error) {
      console.error(error);
      alert({ error: error.message });
    }
  };
};


  //PUT para modificar grupo existente

const modifyTheGroup = ( group) => {
    return async (dispatch) => {
        try {
            if (!group) {
                throw new Error("Group is undefined.");
              }
            const dbData = await axios.put(`${import.meta.env.VITE_API_URL}/groups`, group);
            return dispatch(modifyGroup(dbData));
        } catch (error) {
            alert({error: error.message});
        }
    };
};

const joinUser = ( idGroup, idUser) => {
  return async (dispatch) => {
      try {
          if (!idGroup) {
              throw new Error("Group is undefined.");
            }
          const dbData = await axios.put(`${import.meta.env.VITE_API_URL}/groups/add-user?groupId=${idGroup}&userId=${idUser}`);
          return dispatch(joinUserToGroup(dbData));
      } catch (error) {
          alert({error: error.message});
      }
  };
};

export{
    getAllGroups,
    getGroupDetail,
    groupPost,
    modifyTheGroup,
    joinUser
}