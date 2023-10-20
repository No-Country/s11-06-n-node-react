import { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { AiOutlineTags } from 'react-icons/ai';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { BsPostcard } from 'react-icons/bs';
import { Link } from 'react-router-dom'

export default function BtnAddEvent() {
    const [rotated, setRotated] = useState(false);
    const [displayIcons, setDisplayIcons] = useState(false);

    const toggleBtnAdd = () => {
        setRotated(!rotated);
        setDisplayIcons(!displayIcons);
    };

    return (
        <div className=''>
            <button
                onClick={toggleBtnAdd}
                className={`bg-blue-500 p-2 rounded-full text-4xl text-white flex justify-center items-center my-auto duration-75 ${rotated && 'rotate-45'}`}
            >
                <span className=''><BiPlus/></span>
            </button>

            {displayIcons && (
                <div className='absolute  duration-200'>
                    <Link to={'/'} className='w-14 h-14 bg-green-700 rounded-full m-1 absolute -top-14 right-10 text-white flex flex-col justify-center items-center'>
                        <span className='text-xl'><AiOutlineTags/></span>
                        <p className='text-xs'>Evento</p>
                    </Link>
                    <Link to={'/'} className='w-14 h-14 bg-green-700 rounded-full m-1 absolute top-0 md:top-0 -right-0 text-white flex flex-col justify-center items-center'>
                        <span className='text-xl'><HiOutlineUserGroup/></span>
                        <p className='text-xs'>Grupo</p>
                    </Link>
                    <Link to={'/'} className='w-14 h-14 bg-green-700 rounded-full m-1 absolute top-10 md:top-10 -right-14 text-white flex flex-col justify-center items-center'>
                        <span className='text-xl'><BsPostcard/></span>
                        <p className='text-xs'>Post</p>
                    </Link>
                </div>
            )}
        </div>
    );
}
