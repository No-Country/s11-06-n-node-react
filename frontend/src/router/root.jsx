import { createBrowserRouter, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import PublicRoute from "./public_route";
import PrivateRoute from "./private_route";

const checkAuth = () => {
    try{
        const cookies = Cookies.get("data");
        if(cookies !== undefined){
            if(JSON.parse(cookies).accessToken){
                return true;
            }
        }
        console.log("No hay cookies");
        return false;
    }catch(err){
        console.log(err);
        return false;
    }
}

export const router = createBrowserRouter([
    checkAuth() ? PrivateRoute() : {},
    ...PublicRoute(),
]);