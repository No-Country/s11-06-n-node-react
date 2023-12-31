import {
    getActivities, postEvent, getDetailEvent,  modifyEvent, getDetailActivity, modifyActivity
} from "../Actions/ActivitySlice";
import axios from "axios";

//GET para mostrar todas las actividades. CAMBIAR EL ENDPOINT AL CORRECTO PORQUE NO ESTÁ AÚN
const getAllActivities= () => {
	return async (dispatch) => {
		try {
			const dbData = (await axios.get(`${import.meta.env.VITE_API_URL}/documentation/#/`)).data;			
			return dispatch(getActivities(dbData));
		} catch (error) {
			alert({error: error.message});
		}
	};
};

 //GET Mostrar las actividades por ID. CAMBIAR EL ENDPOINT AL CORRECTO PORQUE NO ESTÁ AÚN
const getActivityDetail = (id) => {
	return async (dispatch) => {
		try {
			const dbData = (await axios.get(`${import.meta.env.VITE_API_URL}/documentation/#/${id}`)).data;
			dispatch(getDetailActivity(dbData));
		} catch (error) {
			alert({error: error.message});
		}
	};
};

//POST para crear una actividad CAMBIAR EL ENDPOINT AL CORRECTO PORQUE NO ESTÁ AÚN
const activityPost = (eventData) => {
  return async (dispatch) => {
    try {
       const response = await axios.post(`${import.meta.env.VITE_API_URL}/documentation/#/`, eventData);
       dispatch(postActivity(response.data));
    } catch (error) {
      console.error(error);
      alert({ error: error.message });
    }
  };
};

  //PUT para modificar la actividad. CAMBIAR EL ENDPOINT AL CORRECTO PORQUE NO ESTÁ AÚN

const modifyTheActivity = (id, activity) => {
    return async (dispatch) => {
        try {
            if (!activity) {
                throw new Error("Activity is undefined.");
              }
            const dbData = await axios.put(`${import.meta.env.VITE_API_URL}/documentation/#/${id}`, activity);
            return dispatch(modifyActivity(dbData));
        } catch (error) {
            alert({error: error.message});
        }
    };
};

export{
    getAllActivities,
    getActivityDetail,
    activityPost,
    modifyTheActivity
}