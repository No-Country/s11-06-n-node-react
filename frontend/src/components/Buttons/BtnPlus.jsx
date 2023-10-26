import { BiPlus } from 'react-icons/bi';
import { useState } from 'react';
import BtnAddNoticia from './BtnAddNoticia';
import BtnAddGrupo from './BtnAddGrupo';
import ModalAddEvent from '../Modals/ModalAddEvent';
import ModalAddGroup from '../Modals/ModalAddGroup';
import ModalAddNews from '../Modals/ModalAddNews';




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
                <div className='absolute duration-200  -top-64 right-0 w-16 h-64 flex flex-col gap-4 '>
                    <BtnAddGrupo/>
                    <ModalAddEvent />
                    <ModalAddGroup />
                    <ModalAddNews />
                </div>
            )}
        </div>
    );
}
