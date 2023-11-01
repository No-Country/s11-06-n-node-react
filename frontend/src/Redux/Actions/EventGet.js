import {
    getEvents, postEvent, getDetailEvent,  modifyEvent
} from "../Actions/EventSlice";
import axios from "axios";
import { getAuth } from "../../utils/checkAuth";

//GET para mostrar todos los eventos creados. CAMBIAR A LA URL CORRECTA QUE AUN NO ESTÁ
const getAllEvents= () => {
	return async (dispatch) => {
		try {
      const config = getAuth();
			const dbData = (await axios.get(`${import.meta.env.VITE_API_URL}/events`, config)).data;
      console.log(dbData);
			return dispatch(getEvents(dbData));
		} catch (error) {
      console.log(error);
			alert({error: error.message});
		}
	};
};


 //GET Traer el detalle de un evento por Id. CAMBIAR A LA URL CORRECTA QUE AUN NO ESTÁ
 
const getEventDetail = (id) => {
	return async (dispatch) => {
		try {
			const dbData = (await axios.get(`${import.meta.env.VITE_API_URL}/events/${id}`)).data;
			dispatch(getDetailEvent(dbData));
		} catch (error) {
			alert({error: error.message});
		}
	};
};

//POST para crear un evento nuevo. CAMBIAR A LA URL CORRECTA QUE AUN NO ESTÁ
const eventPost = (eventData) => {
  return async (dispatch) => {
    try {
       const response = await axios.post(`${import.meta.env.VITE_API_URL}/events`, eventData);
       dispatch(postEvent(response.data));
    } catch (error) {
      console.error(error);
      alert({ error: error.message });
    }
  };
};

  //PUT Modificar evento. CAMBIAR A LA URL CORRECTA QUE AUN NO ESTÁ

const modifyTheEvent = (id, event) => {
    return async (dispatch) => {
        try {
            if (!event) {
                throw new Error("Event is undefined.");
              }
            const dbData = await axios.put(`${import.meta.env.VITE_API_URL}/events/${id}`, event);
            return dispatch(modifyEvent(dbData));
        } catch (error) {
            alert({error: error.message});
        }
    };
};

export{
    getAllEvents,
    getEventDetail,
    eventPost,
    modifyTheEvent
}