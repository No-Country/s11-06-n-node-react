import { useState } from 'react';
import Modal from 'react-modal'
Modal.setAppElement('#root');
import { BsCardImage } from 'react-icons/bs';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { ImageProfileUserLarge, ImageProfileUserSmall } from '../Images/ImageProfileUser';
import place1 from '../../../public/place1.jpeg'


export default function BtnAddGrupo() {
    const [modal, setModal] = useState(false)
    const openModal = () => {
        setModal(true)
    }
    const closeModal = () => {
        setModal(false)
    }

    return (
        <>
            <button onClick={openModal} className='w-14 h-14 bg-greenSecundary rounded-full m-1 absolute -top-48  -right-14 text-white flex flex-col justify-center items-center'>
                <span className='text-xl'><HiOutlineUserGroup/></span>
                <p className='text-xs'>Grupo</p>
            </button>
            <Modal isOpen={modal} onRequestClose={closeModal} className={'overflow-y-scroll h-full'}>
                <div className='flex justify-center items-center h-full text-sm text-greenPrimary'>
                    <div className='border border-graySecundary max-w-xs sm:max-w-xl w-full p-5 sm:p-16 shadow-2xl bg-white rounded-lg'>
                        <div className='border-b border-greenPrimary flex justify-between'>
                            <p className='text-2xl py-2'>Crear Grupo</p>
                            <button onClick={closeModal} className='text-4xl text-greenSecundary'><AiOutlineCloseCircle/></button>
                        </div>

                        <div className='flex justify-center py-8'>
                            <ImageProfileUserLarge imagen={place1}/>
                        </div>

                        <form className='flex flex-col gap-y-5'>
                            <div className='flex flex-col py-5 gap-y-3'>
                                <div className='flex flex-col gap-y-2'>
                                    <label htmlFor="">Nombre del grupo</label>
                                    <input type="text" placeholder='Dale un nombre a tu grupo' className='border border-gray-400 p-2 rounded-md'/>
                                </div>
                                <div className='flex flex-col gap-y-2'>
                                    <label htmlFor="">Descripción</label>
                                    <input type="text" placeholder='Describe tu grupo' className='border border-gray-400 p-2 rounded-md'/>
                                </div>
                                <div className='flex flex-col gap-y-2'>
                                    <label htmlFor="">Establecer reglas del grupo</label>
                                    <input type="text" placeholder='Selecciona' className='border border-gray-400 p-2 rounded-md'/>
                                </div>
                            </div>
                            <input type="submit" value="Crear" className='bg-greenSecundary w-full py-2 text-white font-bold rounded-md cursor-pointer hover:bg-greenPrimary duration-75'/>
                        </form>
                    </div>
                </div>
            </Modal>
        </>
    )
}
