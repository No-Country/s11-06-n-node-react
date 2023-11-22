import { getAuth } from "../../utils/checkAuth";
import {
    getGroups, postGroup, getDetailGroup,  modifyGroup, joinUserToGroup, leaveUserToGroup, acceptUserToGroup
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
  // console.log(eventData)
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
//Agregar usuario al grupo - envia solicitud y queda en pendiente
const joinUser = ( idGroup, idUser) => {
  return async (dispatch) => {
      try {
          if (!idGroup) {
              throw new Error("Group is undefined.");
            }
          const dbData = await axios.post(`${import.meta.env.VITE_API_URL}/groups/add-user?groupId=${idGroup}&userId=${idUser}`);
          console.log(dbData);
          return dispatch(joinUserToGroup(dbData.data));
      } catch (error) {
          alert({error: error.message});
      }
  };
};

//Aceptar usuario consolicitud pendiente
// /acceptpending/:groupId/accept/:userId
const acceptUserPending = ( groupId, userId) => {
  return async (dispatch) => {
      try {

          if (!groupId) {
              throw new Error("Group is undefined.");
            }
          const dbData = await axios.put(`${import.meta.env.VITE_API_URL}/groups/acceptpending/${groupId}/accept/${userId}`);
          // console.log(dbData);
          return dispatch(acceptUserToGroup(userId));
      } catch (error) {
          alert({error: error.message});
      }
  };
};

const leaveGroup = ( groupId, userId) => {
  return async (dispatch) => {
    // console.log("idGroup",groupId,"idUser", userId);
    const config = getAuth()
      try {
          if (!groupId) {
              throw new Error("Group is undefined.");
            }
            const url = `${import.meta.env.VITE_API_URL}/groups/leave/${groupId}/${userId}`
            // console.log(url);
          const dbData = await axios.delete(url,config);
          // console.log(dbData);
          return dispatch(leaveUserToGroup(userId));
      } catch (error) {
          alert({error: error.message});
      }
      // /leave/:groupId/:userId
  };
};
export{
    getAllGroups,
    getGroupDetail,
    groupPost,
    modifyTheGroup,
    joinUser,
    acceptUserPending,
    leaveGroup
}