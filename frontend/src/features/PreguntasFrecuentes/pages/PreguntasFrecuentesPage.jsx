import SearchBar from '../../../components/SearchBar/SearchBar'
import Sidebar from '../../../components/Sidebar/Sidebar'
import ListCardFirends from '../../../components/ListCardFriends'
import { useState } from "react";
import { MdRemove } from "react-icons/md";
import BtnQuestion from '../../../components/Buttons/BtnQuestion';
import Typography from '../../../components/Typography';

export default function PreguntasFrecuentesPage() {
    

    const questions = [
        {
            question: '¿Qué puedo hacer dentro de la plataforma?',
            answer: 'Encuentra GlobalMates y conecta con otros viajeros en el destino donde te encuentres. También tienes la posibilidad de realizar actividades y experiencias locales, y contactar a otros usuarios para planificar encuentros.',
            id: new Date()
        },
        {
            question: '¿Es seguro conocer a personas a través de esta aplicación?',
            answer: 'Nuestra prioridad es crear un entorno seguro donde se fomente la conexión entre usuarios y las experiencias inolvidables. Verificamos los perfiles de los usuarios y fomentamos la comunicación a través de la plataforma antes de encontrarse en persona. Puedes conocer nuestros consejos de seguridad y recomendaciones para reuniones seguras.',
            id: new Date()
        },
        {
            question: '¿Puedo usar la aplicación para encontrar compañeros de viaje?',
            answer: 'Nuestra aplicación es ideal para encontrar compañeros de viaje. Puedes buscar personas que tengan planes similares o estén interesadas en continuar el viaje en conjunto.',
            id: new Date()
        },
        {
            question: '¿Cómo puedo descubrir las experiencias locales disponibles en mi destino?',
            answer: 'Busca experiencias locales en tu destino utilizando nuestro buscador y aplicando los filtros disponibles. Simplemente ingresa tu ubicación y selecciona las actividades que te interesen. Nuestra aplicación mostrará los eventos disponibles cerca de donde estás.',
            id: new Date()
        },
        {
            question: '¿Es necesario pagar para usar la aplicación?',
            answer: 'Nuestra aplicación es gratuita para descargar y usar, pero ofrecemos opciones premium que desbloquean características adicionales, como ver quién ha visitado tu perfil o acceder a contenido exclusivo. Sin embargo, la mayoría de las funciones esenciales son accesibles de forma gratuita.',
            id: new Date()
        },
        {
            question: '¿Cuáles son las recomendaciones básicas a seguir cuando conozco a alguien?',
            answer: 'Antes de planificar un encuentro o ir a una experiencia, revisa el perfil del usuario y las reseñas de otras personas que hayan interactuado con ellos. Esto te ayudará a conocer su historial y reputación en la comunidad. Si planeas encontrarte con alguien en persona, elige un lugar público y concurrido para el primer encuentro. Evita compartir información de ubicación exacta de tu alojamiento o residencia personal.',
            id: new Date()
        }
    ]

    
    return (
        <div className='text-greenPrimary'>
            <SearchBar/>

            <Typography.TitleContainer>Preguntas Frecuentes</Typography.TitleContainer>

            {questions.map((question, index) => {

                return(
                    <BtnQuestion
                        key={index}
                        question={question.question}
                        answer={question.answer}
                    />
                )
            })}
        </div>
    )
}
