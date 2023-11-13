import CardComentario from "../Cards/CardComentario/CardComentario";

import { AiOutlineClose } from 'react-icons/ai';

export default function ModalComentarios({closeModal}) {

    const comentariosData = [
        {
            "user": "Henry Ramirez",
            "comment": "Me encantaría estar en ese lugar ahora mismo. ¡El viaje debe de haber sido increíble! ✈️🌍",
            "date": "21 h"
        },
        {
            "user": "Kevin Tea",
            "comment": "Los viajes son la mejor forma de enriquecer el alma. Parece que tuviste una experiencia única. ¿Algún consejo para el próximo viajero? 🌄🌴",
            "date": "14 h"
        }
    ]    

    return (
        <div className="flex justify-center items-center h-full px-5">
            <div className="max-w-2xl bg-white w-full p-5 md:p-6  rounded-lg shadow-lg border border-gray-200 relative">
                <div className="border-b border-greenPrimary text-lg font-bold mb-10 mt-1 pb-2">Comentarios:</div>
                <button onClick={closeModal} className="absolute top-3 right-3 text-xl"><AiOutlineClose/></button>

                <div className="flex flex-col gap-y-5">
                    {comentariosData.map(comentarioData => (
                        <CardComentario
                            imageUser={comentarioData.imageUser}
                            name={comentarioData.name}
                            comment={comentarioData.comment}
                            date={comentarioData.date}
                        />
                    ))}
                </div>
            </div>
            
        </div>
    )
}
