import { BiPlus } from 'react-icons/bi';
import { AiOutlineTags } from 'react-icons/ai';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { useState } from 'react';
import BtnAddNoticia from './BtnAddNoticia';
import BtnAddEvent from './BtnAddEvent';
import BtnAddGrupo from './BtnAddGrupo';




export default function BtnPlus() {
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
                className={`bg-greenPrimary p-2 rounded-full text-4xl text-white flex justify-center items-center duration-75 ${rotated && 'rotate-45'}`}
            >
                <span className=''><BiPlus/></span>
            </button>

            {displayIcons && (
                <div className='absolute duration-200'>
                    <BtnAddNoticia/>
                    <BtnAddEvent/>
                    <BtnAddGrupo/>


                    {/* <button className='w-14 h-14 bg-greenSecundary rounded-full m-1 absolute -top-48 -right-14 text-white flex flex-col justify-center items-center'>
                        <span className='text-xl'><HiOutlineUserGroup/></span>
                        <p className='text-xs'>Grupo</p>
                    </button> */}
                    {/* <button className='w-14 h-14 bg-greenSecundary rounded-full m-1 absolute -top-32 -right-14 text-white flex flex-col justify-center items-center'>
                        <span className='text-xl'><AiOutlineTags/></span>
                        <p className='text-xs'>Evento</p>
                    </button> */}
                </div>
            )}
        </div>
    );
}
