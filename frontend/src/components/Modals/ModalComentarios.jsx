import CardComentario from "../Cards/CardComentario/CardComentario";
import Typography from "../Typography";
import user1 from '../../../public/person4.png'
import user2 from '../../../public/person6.png'
import { AiOutlineClose } from 'react-icons/ai';

export default function ModalComentarios({closeModal}) {

    const comentariosData = [
        {
            imageUser: user1,
            name: 'Henry Ramirez',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            date: '21 h'
        },
        {
            imageUser: user2,
            name: 'Kevin Tea',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sint magni veritatis vitae dolorem explicabo.',
            date: '14 h'
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
