import ModalAdd from "./ModalAdd"
import { BsCardImage } from 'react-icons/bs';

export default function ModalAddActivity() {


    return (
        <ModalAdd >
                    <form className='flex flex-col gap-y-5'>
                        <div className='relative'>
                            <textarea name="" id="" cols="30" rows="10" placeholder='Escribe una descripción de tu actividad' className='border w-full px-4 py-2 h-32 rounded-md'></textarea>
                            <p className='absolute right-3 bottom-2 text-xs text-gray-400'>200 caracteres</p>
                        </div>
                        <div className='border p-2 flex justify-between items-center rounded-md'>
                            <p className='rounded-md'>Agregar:</p>
                            <div className='flex gap-x-5'>
                                <p className='border border-greenSecundary text-greenSecundary px-2 rounded-xl text-sm'>Categoria</p>
                                <button className='text-xl'><BsCardImage/></button>
                            </div>
                        </div>
                        <input type="submit" value="Publicar" className='bg-greenPrimary w-full py-2 text-white font-bold rounded-md cursor-pointer hover:bg-greenSecundary duration-75'/>
                    </form>
        </ModalAdd>
    )
}
