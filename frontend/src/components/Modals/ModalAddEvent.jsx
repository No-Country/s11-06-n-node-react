import Modal from 'react-modal'
Modal.setAppElement('#root');
import { useState } from 'react';


import { BsCardImage } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { GrClose } from 'react-icons/gr';
import { ImageProfileUserSmall } from '../Images/ImageProfileUser';
import image1 from '../../../public/user1.jpeg'
import ModalAdd from './ModalAdd';
import { CustomForm } from '../CustomForm';
import TextArea from '../Input/textarea';
// import ModalAddEvent from '../Modals/ModalAddEvent';



export default function ModalAddEvent() {
    const [modal, setModal] = useState(false)
    const openModal = () => {
        setModal(true)
    }
    const closeModal = () => {
        setModal(false)
    }

    return (
        <ModalAdd title="Crear Evento">
            <CustomForm>
                <div className='relative'>
                    <TextArea name="description" id="" cols="30" rows="10" placeholder='Escribe una descripción de tu actividad' className='border w-full px-4 py-2 h-32 rounded-md'/>
                    <p className='absolute right-3 bottom-2 text-xs text-gray-400'>200 caracteres</p>
                </div>
                <div className='border p-2 flex justify-between items-center rounded-md'>
                    <p className='rounded-md'>Agregar:</p>
                    <div className='flex gap-x-5'>
                        <p className='border border-greenSecundary text-greenSecundary px-2 rounded-xl text-sm'>Categoria</p>
                        <button className='text-xl'><BsCardImage /></button>
                    </div>
                </div>
                <button name="boton" type="submit" value="Publicar" className='bg-greenPrimary w-full py-2 text-white font-bold rounded-md cursor-pointer hover:bg-greenSecundary duration-75'> Publicar </button>
            </CustomForm>
        </ModalAdd>

    )
}
