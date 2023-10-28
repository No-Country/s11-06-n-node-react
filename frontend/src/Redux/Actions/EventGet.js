import {
    getEvents, postEvent, getDetailEvent,  modifyEvent
} from "../Actions/EventSlice";
import axios from "axios";


//GET para mostrar todos los eventos creados. CAMBIAR A LA URL CORRECTA QUE AUN NO ESTÁ
const getAllEvents= () => {
	return async (dispatch) => {
		try {
			const dbData = (await axios.get(`https://s11-06-n-node-react-back.onrender.com/events`)).data;			
			return dispatch(getEvents(dbData));
		} catch (error) {
			alert({error: error.message});
		}
	};
};


 //GET Traer el detalle de un evento por Id. CAMBIAR A LA URL CORRECTA QUE AUN NO ESTÁ
 
const getEventDetail = (id) => {
	return async (dispatch) => {
		try {
			const dbData = (await axios.get(`https://s11-06-n-node-react-back.onrender.com/events/${id}`)).data;
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
       const response = await axios.post('https://s11-06-n-node-react-back.onrender.com/events', eventData);
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
            const dbData = await axios.put(`https://s11-06-n-node-react-back.onrender.com/events/${id}`, event);
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