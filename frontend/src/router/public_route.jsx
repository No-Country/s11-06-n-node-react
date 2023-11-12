import { Navigate } from "react-router-dom";
import Login from "../features/Login/Login";
import Register from "../features/Register/Registro";

export default function publicRoute() {
    return [
        { 
            path: "/login",
            element: <Login /> 
        },
        { 
            path: "/register",
            element: <Register /> 
        },
        {
            path: "*", 
            element: <Navigate to="/login" replace /> 
        },
    ];
}