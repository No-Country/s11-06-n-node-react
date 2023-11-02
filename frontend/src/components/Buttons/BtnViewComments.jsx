import { useState } from 'react';
import { BiMessageRoundedDots } from 'react-icons/bi';
import Modal from 'react-modal'
import ModalComentarios from '../Modals/ModalComentarios';
Modal.setAppElement('#root');


export default function BtnViewComments() {
    const [modal, setModal] = useState(false)
    const openModal = () => {
        setModal(true)
    }
    const closeModal = () => {
        setModal(false)
    }

    return (
        <>
            <button 
                onClick={openModal}
                className='text-gray-500 text-sm flex justify-end items-center gap-x-1'>

                123 mates comentaron<span className='text-lg'><BiMessageRoundedDots/></span>
            </button>
            <Modal isOpen={modal} onRequestClose={closeModal} className={'overflow-y-scroll h-full'}>
		        <ModalComentarios closeModal={closeModal} />
            </Modal>
        </>
    )
}

