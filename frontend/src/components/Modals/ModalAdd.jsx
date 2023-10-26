import Modal from 'react-modal'
Modal.setAppElement('#root');
import { useState } from 'react';

import { CiLocationOn } from 'react-icons/ci';
import { GrClose } from 'react-icons/gr';
import { ImageProfileUserSmall } from '../Images/ImageProfileUser';
import image1 from '../../../public/user1.jpeg'
import { BsPostcard } from 'react-icons/bs';
// import ModalAddEvent from '../Modals/ModalAddEvent';

const ModalAdd = ({ children, title, icon }) => {

    const [modal, setModal] = useState(false)
    const openModal = () => {
        setModal(true)
    }
    const closeModal = () => {
        setModal(false)
    }

    return (

        <>
            <button onClick={openModal} className='w-16 h-16 p-2 bg-greenSecundary rounded-full text-white flex flex-col justify-center items-center border-solid shadow-2xl border-greenPrimary hover:bg-greenPrimary'>
                <span className='text-xl'> {icon}</span>
                <p className='text-xs'>{title}</p>
            </button>
            
            <Modal isOpen={modal} onRequestClose={closeModal} className={'overflow-y-scroll h-full'}>
                <div className='flex justify-center items-center h-full text-sm text-greenPrimary'>
                    <div className='border border-graySecundary max-w-xs sm:max-w-xl w-full p-5 sm:p-14 shadow-2xl bg-white rounded-lg relative'>
                        
                        {/* Header */}
                        <div className='border-b border-greenPrimary flex justify-between'>
                            <p className='text-2xl py-2'>{title}</p>
                            <button onClick={closeModal} className='absolute top-5 right-5 text-2xl text-greenSecundary'><GrClose /></button>
                        </div>

                        {/* Body */}
                        {/*  */}

                        {children}

                    </div>
                </div>
            </Modal>
        </>

    )
}


const Header = ({ className, children }) => {
    return (
        <header className={`${className} w-full `}>
            {children}
        </header>
    )
}
const Body = ({ className, children }) => {
    return (
        <header className={`${className} w-full `}>
            {children}
        </header>
    )
}

const Footer = ({ className, children }) => {
    return (
        <footer className={`${className} w-full align-bottom  mt-auto`}>
            {children}
        </footer>
    )
}


ModalAdd.Header = Header;
ModalAdd.Body = Body;
ModalAdd.Footer = Footer;

export default ModalAdd