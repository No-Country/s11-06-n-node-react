import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "../features/Dashboard/pages";

import UserProfile from "../features/User/pages/UserProfile";

import Noticias from "../features/Noticias/pages/Noticias";
import Layout from "../components/Layaout";
import Login from "../features/Login/Login";
import HomePage from "../features/Home/pages";
import FQA from "../features/FQA/FQA";
import Mensajes from "../components/MessageContainer/index";


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
        element:<Mensajes />
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
    }
    ]
}
    ]);