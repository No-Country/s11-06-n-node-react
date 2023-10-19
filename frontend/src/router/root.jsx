import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "../features/Dashboard/pages";

import UserProfile from "../features/User/pages/UserProfile";

import Noticias from "../features/Noticias/pages/Noticias";
import Layout from "../components/Layaout";
import Login from "../features/Login/Login";
import HomePage from "../features/Home/pages";


export const router = createBrowserRouter([
    {
    path: "/",
    element: <Layout />,
    children:[
    {
        element: <HomePage />,
        index:true
    },
    {
        path:"/dashboard",
        element: <DashboardPage/>
    },
    {
        path:"/login",
        element:<Login />
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
        path:"/preguntasfrecuentes",
        element:<></>
    },
    {
        path:"/user-profile",
        element:<UserProfile/>
    }
    ]
}
    ]);