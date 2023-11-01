import { Navigate } from "react-router-dom";
import Layout from "../components/Layaout";
import DashboardPage from "../features/Dashboard/pages/DashBoardPage";
import NoticiasPage from "../features/Noticias/pages/NoticiasPage";
import FavoritosPage from "../features/Favoritos.jsx/pages/FavoritosPage";
import EventosPage from "../features/Events/pages/EventosPage";
import GruposPage from "../features/Grupos/pages/GruposPage";
import PreguntasFrecuentesPage from "../features/PreguntasFrecuentes/pages/PreguntasFrecuentesPage";
import EventoIdPage from "../features/Events/pages/EventoIdPage";
import UserProfilePage from "../features/User/pages/UserProfilePage";
import MessageContainer from "../components/MessageContainer";
import { GrupoDetail } from "../features/Grupos/components/GrupoDetail";

export default function privateRoute(){
    return {
        element: <Layout />,
        children:[
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
                element:<MessageContainer/>
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
                path:"/grupos/:id",
                element:<GrupoDetail/>
            },
            {
                path:"/preguntas-frecuentes",
                element:<PreguntasFrecuentesPage/>
            },
            {
                path:"/perfil",
                element:<UserProfilePage/>
            },
            {
                path: "*",
                element: <Navigate to="/dashboard" replace /> 
            },
        ]
    }

    
}