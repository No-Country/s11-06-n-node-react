import { BsPerson, BsNewspaper } from 'react-icons/bs';
import { PiHandHeartThin } from 'react-icons/pi';
import { LuLayoutDashboard } from 'react-icons/lu';
import { AiOutlineTags, AiOutlineQuestionCircle } from 'react-icons/ai';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import Cookies from 'js-cookie';

export default function LinksMenu() {
    const handleLogout = () => {
        if (Cookies.get('data')) {
            Cookies.remove('data', { path: '/auth' });
            Cookies.remove('data', { path: '/' });
            console.log("usuario desconectado");
            window.location.reload();
          } else {
            console.log("La cookie 'userData' no existe.");
          }

      };
    return (
    <div className='flex h-4/5 flex-col justify-between;'>
        <div className='flex flex-col gap-y-5 h-full'>
            <Link to={'/dashboard'} className='flex items-center'><span className='text-2xl mr-2'><LuLayoutDashboard/></span>Dashboard</Link>
            <Link to={'/perfil'} className='flex items-center'><span className='text-2xl mr-2'><BsPerson/></span>Perfil del usuario</Link>
            {/* <Link to={'/favoritos'} className='flex items-center'><span className='text-2xl mr-2'><PiHandHeartThin/></span>Favoritos</Link> */}
            <Link to={'/eventos'} className='flex items-center'><span className='text-2xl mr-2'><AiOutlineTags/></span>Eventos</Link>
            <Link to={'/noticias'} className='flex items-center'><span className='text-2xl mr-2'><BsNewspaper/></span>Noticias</Link>
            <Link to={'/grupos'} className='flex items-center'><span className='text-2xl mr-2'><HiOutlineUserGroup/></span>Grupos</Link>
            <button onClick={handleLogout} className="flex flex-row  content-center items-center text-auto w-full text-red hover:text-red-900 transition duration-300">
        <span className="text-base mr-2 flex flex-row  content-center items-center text-auto w-full"><RiLogoutBoxRLine className='mr-2'></RiLogoutBoxRLine> Cerrar sesión</span>
      </button>
        </div>
        <div>
            <Link to={'/preguntas-frecuentes'} className='flex items-center'><span className='text-2xl mr-2'><AiOutlineQuestionCircle/></span>Preguntas frecuentes</Link>
            </div>
        
</div>
    )
}
