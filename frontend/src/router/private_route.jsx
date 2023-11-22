import { Navigate } from "react-router-dom";
import Layout from "../components/Layaout";
import DashboardPage from "../features/Dashboard/pages/DashBoardPage";
import NoticiasPage from "../features/Noticias/pages/NoticiasPage";
import EventosPage from "../features/Events/pages/EventosPage";
import GruposPage from "../features/Grupos/pages/GruposPage";
import PreguntasFrecuentesPage from "../features/PreguntasFrecuentes/pages/PreguntasFrecuentesPage";
import EventoIdPage from "../features/Events/pages/EventoIdPage";
import UserProfilePage from "../features/User/pages/UserProfilePage";
import AllEvents from "../features/User/sections/EventosyNoticias/AllEvents";
import AllNews from "../features/User/sections/EventosyNoticias/AllNews";
import MessageContainer from "../features/Chat/components/MessageContainer";
import { GrupoDetail } from "../features/Grupos/components/GrupoDetail";
import NoticiasPageID from "../features/Noticias/pages/NoticiasPageID";
import ChatIdPage from "../features/Chat/pages/ChatIdPage";

export default function privateRoute(){
    return {
        element: <Layout />,
        children:[
            {
                path:"/dashboard",
                element: <DashboardPage/>
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
                path:"/mensajes/:iduser",
                element:<ChatIdPage/>
            },
            {
                path:"/noticias",
                element:<NoticiasPage/>
            },
            {
                path:"/noticias/:id",
                element:<NoticiasPageID/>
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
                path:"/news/user",
                element:<AllNews/>
            },
            {
                path:"/events/user",
                element:<AllEvents/>
            },
            {
                path:"/grupo/:GroupId",
                element:<GrupoDetail/>
            },
            
            {
                path: "*",
                element: <Navigate to="/dashboard" replace /> 
            },
        ]
    }

    
}