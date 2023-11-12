
import axios from "axios";
import { getFlags } from "../Actions/flagsSlice";


//GET para traer todos los usuarios logueados
const getAllFlags= () => {
	return async (dispatch) => {
		try {
			const dbData = await axios.get(`${import.meta.env.VITE_API_URL}/flags`);	
			// console.log(dbData);		
			dispatch(getFlags(dbData.data));
		} catch (error) {
			console.error(error);
		}
	};
};



export{
   getAllFlags
}