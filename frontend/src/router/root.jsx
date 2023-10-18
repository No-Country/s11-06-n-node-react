import { createBrowserRouter } from "react-router-dom";
import HomePage from "../features/Home/pages";
import DashboardPage from "../features/Dashboard/pages";
import UserProfile from "../features/User/pages/UserProfile";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <HomePage />,
    },
    {
        path:"/dashboard",
        element: <DashboardPage/>
    },
    {
        path:"/login",
        element:<></>
    },
    {
        path:"/mensajes",
        element:<></>
    },
    {
        path:"/noticias",
        element:<></>
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
    ]);