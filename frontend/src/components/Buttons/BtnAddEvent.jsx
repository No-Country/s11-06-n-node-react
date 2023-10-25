import { useState } from 'react';

import { AiOutlineTags } from 'react-icons/ai';
import ModalAddEvent from '../Modals/ModalAddEvent';


export default function BtnAddEvent() {

    return(
        <>
            <button onClick={openModal} className='w-14 h-14 bg-greenSecundary rounded-full m-1 absolute -top-32  -right-14 text-white flex flex-col justify-center items-center'>
                <span className='text-xl'><AiOutlineTags/></span>
                <p className='text-xs'>Evento</p>
            </button>
            <ModalAddEvent/>
        </>
    )
}
