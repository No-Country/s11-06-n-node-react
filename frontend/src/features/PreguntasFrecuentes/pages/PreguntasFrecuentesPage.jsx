import SearchBar from '../../../components/SearchBar/SearchBar'
import Sidebar from '../../../components/Sidebar/Sidebar'
import ListCardFirends from '../../../components/ListCardFriends'
import { useState } from "react";
import { MdRemove } from "react-icons/md";
import BtnQuestion from '../../../components/Buttons/BtnQuestion';

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


    const handleToggleText = () => {
        setShowText(!showText);
    };
    const [showText, setShowText] = useState(false);

    
    return (
        <div className='flex'>
            <div className='hidden lg:block'><Sidebar/></div>

            <div className="mb-20 ml-0 lg:ml-64 px-5 md:px-10 mx-auto w-full">
                <div className='max-w-7xl mx-auto text-greenPrimary'>
                    <SearchBar/>

                    <p className='text-2xl font-bold mb-10'>Preguntas Frecuentes:</p>

                    {questions.map((question, index) => {

                        return(
                            <BtnQuestion
                                key={index}
                                question={question.question}
                                answer={question.answer}
                            />
                        )
                    })}

                    <div>









                        {/* <div className="grid grid-cols-2 gap-x-10">
                            {questions.map((question) => (
                                <p question={question.question}
                                answer={question.answer}>
                                        <div className="mb-10">
                                        <button
                                            
                                            onClick={handleToggleText}
                                        >
                                            {question}
                                            <span className="text-xl font-bold">
                                            {showText ? <MdRemove /> : <GoPlus />}
                                            </span>
                                        </button>
                                        {showText && (
                                            <div className="bg-secundaryGreyLight2 p-4 rounded-b-md">
                                            <p>{answer}</p>
                                            </div>
                                        )}
                                        </div>                             
                                </p>
                            ))}
                        </div> */}







                    </div>
                </div>
            </div>

            <div className='hidden lg:block'><ListCardFirends/></div>
        </div>
    )
}
