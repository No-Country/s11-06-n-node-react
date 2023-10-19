import { createBrowserRouter } from "react-router-dom";
import HomePage from "../features/Home/pages";
import DashboardPage from "../features/Dashboard/pages";
<<<<<<< HEAD
import Login from "../features/Login/Login";
=======
import Noticias from "../features/Noticias/pages/Noticias";
>>>>>>> 3e4e800e6932a322fde0e7187aec44103c40b8fb

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
    }
    ]);