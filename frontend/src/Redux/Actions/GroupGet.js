import {
    getGroups, postGroup, getDetailGroup,  modifyGroup
} from "../Actions/GroupSlice";
import axios from "axios";


//GET mostramos todos los grupos
const getAllGroups= () => {
	return async (dispatch) => {
		try {
			const dbData = (await axios.get(`https://s11-06-n-node-react-back.onrender.com/groups`)).data;			
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
			const dbData = (await axios.get(`https://s11-06-n-node-react-back.onrender.com/groups/${id}`)).data;
			dispatch(getDetailGroup(dbData));
		} catch (error) {
			alert({error: error.message});
		}
	};
};

//POST para crear un nuevo grupo
const groupPost = (eventData) => {
  return async (dispatch) => {
    try {
       const response = await axios.post('https://s11-06-n-node-react-back.onrender.com/groups', eventData);
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
            const dbData = await axios.put(`https://s11-06-n-node-react-back.onrender.com/groups`, group);
            return dispatch(modifyGroup(dbData));
        } catch (error) {
            alert({error: error.message});
        }
    };
};

export{
    getAllGroups,
    getGroupDetail,
    groupPost,
    modifyTheGroup
}