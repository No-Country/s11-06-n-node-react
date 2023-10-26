import { Navigate } from "react-router-dom";
import DashboardPage from "../features/Dashboard/pages";
import UserProfile from "../features/User/pages/UserProfile";
import Noticias from "../features/Noticias/pages/Noticias";
import Layout from "../components/Layaout";
import HomePage from "../features/Home/pages";
import FQA from "../features/FQA/FQA";


export default function privateRoute(){
    return {
        element: <Layout />,
        children:[
            {
                path:"/dashboard",
                element: <DashboardPage/>
            },
            {
                path:"/mensajes",
                element:<></>
            },
            {
                path:"/noticias",
                element:<Noticias/>
            },
            {
                path:"/creargrupo",
                element:<></>
            },
            {
                path:"/grupos",
                element:<></>
            },
            {
                path:"/fqa",
                element:<FQA />
            },
            {
                path:"/user-profile",
                element:<UserProfile/>
            },
            {
                path: "*",
                element: <Navigate to="/dashboard" replace /> 
            },
        ]
    }
}