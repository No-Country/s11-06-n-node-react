import { useState } from 'react';
import Modal from 'react-modal'
Modal.setAppElement('#root');
import { AiOutlineTags } from 'react-icons/ai';
import { BsPostcard, BsCardImage } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { ImageProfileUserSmall } from '../Images/ImageProfileUser';
import image1 from '../../../public/user1.jpeg'


export default function BtnAddEvent() {
    const [modal, setModal] = useState(false)
    const openModal = () => {
        setModal(true)
    }
    const closeModal = () => {
        setModal(false)
    }

    return (
        <>
            <button onClick={openModal} className='w-14 h-14 bg-greenSecundary rounded-full m-1 absolute -top-32  -right-14 text-white flex flex-col justify-center items-center'>
                <span className='text-xl'><AiOutlineTags/></span>
                <p className='text-xs'>Evento</p>
            </button>
            <Modal isOpen={modal} onRequestClose={closeModal} className={'overflow-y-scroll h-full'}>
                <div className='flex justify-center items-center h-full text-sm text-greenPrimary'>
                    <div className='border border-graySecundary max-w-xs sm:max-w-xl w-full p-5 shadow-2xl bg-white rounded-lg'>
                        <div className='border-b border-greenPrimary flex justify-between'>
                            <p className='text-2xl py-2'>Crear Evento</p>
                            <button onClick={closeModal} className='text-4xl text-greenSecundary'><AiOutlineCloseCircle/></button>
                        </div>
                        <div className='flex gap-x-3 items-center my-5'>
                            <div>
                                <ImageProfileUserSmall imagen={image1}/>
                            </div>
                            <div>
                                <p className='font-bold mb-1'>Henry Ramirez</p>
                                <p className="border border-gray-500 px-2 py-1 rounded-2xl flex items-center w-fit text-xs"><p className='mr-1 text-base -ml-1'><CiLocationOn/></p>Lima</p>
                            </div>
                        </div>

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
                            <input type="submit" value="Publicar" className='bg-greenSecundary w-full py-2 text-white font-bold rounded-md cursor-pointer hover:bg-greenPrimary duration-75'/>
                        </form>
                    </div>
                </div>
            </Modal>
        </>
    )
}
