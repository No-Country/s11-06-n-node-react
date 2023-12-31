import { BsPerson, BsNewspaper } from 'react-icons/bs';
import { PiHandHeartThin } from 'react-icons/pi';
import { LuFileSignature, LuLayoutDashboard } from 'react-icons/lu';
import { AiOutlineTags, AiOutlineQuestionCircle } from 'react-icons/ai';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import Cookies from 'js-cookie';
import { FiLogIn } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { logOutUser } from '../../Redux/Actions/UserGet';
import { getAuth } from '../../utils/checkAuth';

export default function LinksMenu(user) {

const dispatch = useDispatch()

const config = getAuth()
    const handleLogout = async () => {
      await dispatch(logOutUser(user,config))
        if (Cookies.get('data')) {
            Cookies.remove('data', { path: '/auth' });
            Cookies.remove('data', { path: '/' });
            window.location.reload();
          } else {
            console.log("La cookie 'userData' no existe.");
          }

      };
    return (
    <div className='flex h-4/5 flex-col justify-between pb-10'>
      {Object.keys(user.user).length ?(
        <div className='flex flex-col gap-y-5 h-full'>
          <Link to={'/dashboard'} className='flex items-center'><span className='text-2xl mr-2'><LuLayoutDashboard/></span>Dashboard</Link>
          <Link to={'/eventos'} className='flex items-center'><span className='text-2xl mr-2'><AiOutlineTags/></span>Eventos</Link>
          <Link to={'/noticias'} className='flex items-center'><span className='text-2xl mr-2'><BsNewspaper/></span>Noticias</Link>
          <Link to={'/grupos'} className='flex items-center'><span className='text-2xl mr-2'><HiOutlineUserGroup/></span>Grupos</Link>
          <Link to={'/perfil'} className='flex items-center'><span className='text-2xl mr-2'><BsPerson/></span>Perfil del usuario</Link>
          <Link to={'/preguntas-frecuentes'} className='flex items-center'><span className='text-2xl mr-2'><AiOutlineQuestionCircle/></span>Preguntas frecuentes</Link>
        </div>
      ):(
        <div>
          <Link to={'/login'} className='flex flex-row  content-center items-center w-full '><span className='text-2xl mr-2 '><FiLogIn style={{ color: 'white' }}/></span>Ingresa</Link>

          <Link to={'/register'} className='flex flex-row  content-center items-center w-full mt-4'><span className='text-2xl mr-2 '><LuFileSignature/></span>Regístrate</Link>
        </div>
      )}
      <div>
          <button onClick={handleLogout} className="flex flex-row  content-center items-center text-auto w-full text-red hover:text-red-900 transition duration-300">
            <span className="text-base mr-2 flex flex-row  content-center items-center text-auto w-full"><RiLogoutBoxRLine className='mr-2'></RiLogoutBoxRLine> Cerrar sesión</span>
          </button>
      </div>
        
</div>
    )
}
