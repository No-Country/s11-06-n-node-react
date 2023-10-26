import { createBrowserRouter } from "react-router-dom";

import UserProfile from "../features/User/pages/UserProfile";

import Layout from "../components/Layaout";
import Login from "../features/Login/Login";
import HomePage from "../features/Home/pages";
<<<<<<< HEAD
import FQA from "../features/FQA/FQA";
import Mensajes from "../components/MessageContainer/index";
=======
import DashboardPage from "../features/Dashboard/pages/DashBoardPage";
import NoticiasPage from "../features/Noticias/pages/NoticiasPage";
import FavoritosPage from "../features/Favoritos.jsx/pages/FavoritosPage";
import EventosPage from "../features/Events/pages/EventosPage";
import GruposPage from "../features/Grupos/pages/GruposPage";
import PreguntasFrecuentesPage from "../features/PreguntasFrecuentes/pages/PreguntasFrecuentesPage";
import EventoIdPage from "../features/Events/pages/EventoIdPage";
>>>>>>> 52c6ba13dab0223e1dd4fa28b9eed3a8e59cafcc


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
        path: '/favoritos',
        element: <FavoritosPage/>
    },
    {
        path: '/eventos',
        element: <EventosPage/>
    },
    {
        path: '/eventos/:eventId',
        element: <EventoIdPage/>
    },
    {
        path:"/mensajes",
        element:<Mensajes />
    },
    {
        path:"/noticias",
        element:<NoticiasPage/>
    },
    {
        path:"/grupos",
        element:<GruposPage/>
    },
    {
        path:"/preguntas-frecuentes",
        element:<PreguntasFrecuentesPage/>
    },
    {
        path:"/perfil",
        element:<UserProfile/>
    },
    {
        path:"/login",
        element:<Login />
    },
    ]
}
]);