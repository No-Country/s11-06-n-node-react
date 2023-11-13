import axios from 'axios';

const URL = import.meta.env.VITE_API_URL

export const googleAuth = () => {
    return axios.get(`${URL}/auth/google`)
}