import { createBrowserRouter } from "react-router-dom";
import HomePage from "../features/Home/pages";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <HomePage />,
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
    }
    ]);