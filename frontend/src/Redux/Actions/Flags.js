
import axios from "axios";
import { getFlags } from "./flagsSlice";


//GET para traer todos los usuarios logueados
const getAllFlags= () => {
	return async (dispatch) => {
		try {
			const dbData = await axios.get(`http://localhost:8080/flags`);	
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