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
            question: '¿Cómo funciona el sitio web para encontrar acompañantes en un lugar específico?',
            answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro quibusdam eaque facilis mollitia hic maxime veniam incidunt unde, iste necessitatibus?',
            id: new Date()
        },
        {
            question: '¿Puedo elegir el tipo de acompañante que deseo para mi salida?',
            answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro quibusdam eaque facilis mollitia hic maxime veniam incidunt unde, iste necessitatibus?',
            id: new Date()
        },
        {
            question: '¿Cómo puedo puntuar al acompañante después de la experiencia?',
            answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro quibusdam eaque facilis mollitia hic maxime veniam incidunt unde, iste necessitatibus?',
            id: new Date()
        },
        {
            question: '¿Qué medidas de seguridad toma el sitio web para garantizar la calidad de los acompañantes?',
            answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro quibusdam eaque facilis mollitia hic maxime veniam incidunt unde, iste necessitatibus?',
            id: new Date()
        },
        {
            question: '¿Cuál es el proceso de reserva y pago en el sitio web?',
            answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro quibusdam eaque facilis mollitia hic maxime veniam incidunt unde, iste necessitatibus?',
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
