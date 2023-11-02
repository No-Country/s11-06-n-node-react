import { BiMessageRoundedDetail } from 'react-icons/bi';
import { GrMenu, GrClose } from 'react-icons/gr';
import { useState } from 'react';

export default function BtnMessages() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMessages = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <button onClick={toggleMessages}>
            <BiMessageRoundedDetail/>
        </button>
        {isOpen && (
            <div className='bg-white h-60 w-96 fixed top-0 right-0 shadow-xl border border-gray-300 py-3 px-8 flex flex-col gap-y-3 rounded-xl'>
                <div className='flex justify-between items-center border-b border-greenPrimary py-1 shadow-md'>
                    <p className='text-xl font-bold'>Mensajes:</p>
                    <button onClick={toggleMessages} className='text-xl'><GrClose/></button>
                </div>

                <p className='text-base'>Aún no tienes mensajes</p>
            </div>
        )}
    </>
    )
}
