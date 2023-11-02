import { useState } from 'react';
import { IoMdNotifications } from 'react-icons/io';
import { GrMenu, GrClose } from 'react-icons/gr';

export default function BtnNotifications() {

    const [isOpen, setIsOpen] = useState(false)
    const toggleNotifications = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <button onClick={toggleNotifications}>
                <IoMdNotifications/>
            </button>
            {isOpen && (
                <div className='bg-white h-60 w-96 fixed top-0 right-0 shadow-xl border border-gray-300 py-3 px-8 flex flex-col gap-y-3'>
                    <div className='flex justify-between items-center border-b border-greenPrimary py-1 shadow-md'>
                        <p className='text-xl'>Notificaciones:</p>
                        <button onClick={toggleNotifications} className='text-xl'><GrClose/></button>
                    </div>

                    <p className='text-base'>Aún no tienes notificaciones</p>
                </div>
            )}
        </>
    )
}
