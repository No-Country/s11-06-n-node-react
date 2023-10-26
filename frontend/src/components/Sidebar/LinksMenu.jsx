import { BsPerson, BsNewspaper } from 'react-icons/bs';
import { PiHandHeartThin } from 'react-icons/pi';
import { LuLayoutDashboard } from 'react-icons/lu';
import { AiOutlineTags, AiOutlineQuestionCircle } from 'react-icons/ai';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { Link } from 'react-router-dom'

export default function LinksMenu() {
    return (
        <div className='flex flex-col gap-y-5'>
            <Link to={'/dashboard'} className='flex items-center'><span className='text-2xl mr-2'><LuLayoutDashboard/></span>Dashboard</Link>
            <Link to={'/perfil'} className='flex items-center'><span className='text-2xl mr-2'><BsPerson/></span>Perfil</Link>
            {/* <Link to={'/favoritos'} className='flex items-center'><span className='text-2xl mr-2'><PiHandHeartThin/></span>Favoritos</Link> */}
            <Link to={'/eventos'} className='flex items-center'><span className='text-2xl mr-2'><AiOutlineTags/></span>Eventos</Link>
            <Link to={'/noticias'} className='flex items-center'><span className='text-2xl mr-2'><BsNewspaper/></span>Noticias</Link>
            <Link to={'/grupos'} className='flex items-center'><span className='text-2xl mr-2'><HiOutlineUserGroup/></span>Grupos</Link>
            <Link to={'/preguntas-frecuentes'} className='flex items-center'><span className='text-2xl mr-2'><AiOutlineQuestionCircle/></span>Preguntas frecuentes</Link>
        </div>
    )
}
