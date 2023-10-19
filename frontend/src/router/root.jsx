import { createBrowserRouter } from "react-router-dom";
import HomePage from "../features/Home/pages";
import DashboardPage from "../features/Dashboard/pages";
import Login from "../features/Login/Login";

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
        element: <Login />
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
    }
    ]);