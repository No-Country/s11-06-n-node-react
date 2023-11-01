import { Link } from 'react-router-dom';
import Logo  from '../img/logo-1.png'
import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';
import { GrMenu, GrClose } from 'react-icons/gr';
import LinksMenu from '../Sidebar/LinksMenu';
import { CiLocationOn } from 'react-icons/ci';


import { LuFileSignature, LuLayoutDashboard } from 'react-icons/lu';
import { AiOutlineTags, AiOutlineQuestionCircle } from 'react-icons/ai';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { BsPerson, BsNewspaper } from 'react-icons/bs';
import BtnMessages from '../Buttons/BtnMessages';
import BtnNotifications from '../Buttons/BtnNotifications';

export default function NavBarUser() {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="bg-white h-16 fixed top-0 w-full flex justify-between items-center z-20 px-3 md:px-10 shadow-md opacity-90">
            <div className='flex items-center gap-x-4 sm:gap-x-10'>
                <div className='w-40'><Link to={'/dashboard'}><img src={Logo}/></Link></div>
                <p className="border border-gray-500 px-2 py-1 rounded-2xl flex items-center text-sm"><p className='mr-1 text-xl -ml-1'><CiLocationOn/></p>Argentina</p>
            </div>
            <div className='hidden lg:flex items-center gap-x-5 text-2xl'>
                <span className='flex'><BtnMessages/></span>
                <span className='flex'><BtnNotifications/></span>
            </div>


            <button onClick={toggleMenu} className='text-3xl cursor-pointer lg:hidden'><FiMenu/></button>



            {isOpen && (
                <div className='bg-white fixed top-0 left-0 w-full h-screen p-3 pt-4 opacity'>
                    <div className='flex justify-between'>
                        <span className='w-40'><Link to={'/dashboard'}><img src={Logo}/></Link></span>

                        <button onClick={toggleMenu} className='text-2xl mr-1'><GrClose/></button>
                    </div>
                    


                    <div className='flex flex-col justify-between h-full py-16 px-5 text-greenPrimary'>
                        <div className='flex flex-col gap-y-6'>
                            <Link to={'/dashboard'} className='flex items-center' onClick={toggleMenu}><span className='text-2xl mr-2'><LuLayoutDashboard/></span>Dashboard</Link>
                            <Link to={'/perfil'} className='flex items-center' onClick={toggleMenu}><span className='text-2xl mr-2'><BsPerson/></span>Perfil del usuario</Link>
                            <Link to={'/eventos'} className='flex items-center' onClick={toggleMenu}><span className='text-2xl mr-2'><AiOutlineTags/></span>Eventos</Link>
                            <Link to={'/noticias'} className='flex items-center' onClick={toggleMenu}><span className='text-2xl mr-2'><BsNewspaper/></span>Noticias</Link>
                            <Link to={'/grupos'} className='flex items-center' onClick={toggleMenu}><span className='text-2xl mr-2'><HiOutlineUserGroup/></span>Grupos</Link>
                            {/* <button onClick={handleLogout} className="flex flex-row  content-center items-center text-auto w-full text-red hover:text-red-900 transition duration-300">
                                <span className="text-base mr-2 flex flex-row  content-center items-center text-auto w-full"><RiLogoutBoxRLine className='mr-2'></RiLogoutBoxRLine> Cerrar sesión</span>
                            </button> */}
                        </div>
                        
                        <div className='flex justify-between'>
                            <Link to={'/preguntas-frecuentes'} className='flex items-center' onClick={toggleMenu}><span className='text-2xl mr-2'><AiOutlineQuestionCircle/></span>Preguntas frecuentes</Link>
                            <div className='flex lg:hidden items-center gap-x-5 text-2xl'>
                                <span className='flex'><BtnMessages/></span>
                                <span className='flex'><BtnNotifications/></span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
