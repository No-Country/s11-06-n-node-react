import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

export const googleAuth = () => {
  console.log("hola");
  return axios({
    method: "get",
    url: `${URL}/auth/google`,
    withCredentials: true, 
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
};
