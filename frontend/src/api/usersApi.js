import axios from 'axios';
import {useSelector} from 'react-redux'

const user = useSelector((state) => state.user.userDetail);
console.log(user)
const URL = import.meta.env.VITE_API_URL
export const getUsersDashboard = () => {
    return axios.get(`${URL}/users/dashboard`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}