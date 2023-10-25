import { BsPerson, BsNewspaper } from 'react-icons/bs';
import { PiHandHeartThin } from 'react-icons/pi';
import { LuLayoutDashboard } from 'react-icons/lu';
import { AiOutlineTags, AiOutlineQuestionCircle, AiOutlineTool } from 'react-icons/ai';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { MdOutlineSecurity } from 'react-icons/md';
import { Link } from 'react-router-dom'

export default function LinksMenu() {
    return (
        <div className='flex flex-col gap-y-5'>
            <Link to={'/dashboard'} className='flex items-center'><span className='text-2xl mr-2'><LuLayoutDashboard/></span>Dashboard</Link>
            <Link to={'/'} className='flex items-center'><span className='text-2xl mr-2'><PiHandHeartThin/></span>Favoritos</Link>
            <Link to={'/'} className='flex items-center'><span className='text-2xl mr-2'><AiOutlineTags/></span>Eventos</Link>
            <Link to={'/noticias'} className='flex items-center'><span className='text-2xl mr-2'><BsNewspaper/></span>Noticias</Link>
            <Link to={'/'} className='flex items-center'><span className='text-2xl mr-2'><HiOutlineUserGroup/></span>Grupos</Link>
            <Link to={'/'} className='flex items-center'><span className='text-2xl mr-2'><AiOutlineQuestionCircle/></span>Preguntas frecuentes</Link>
            <Link to={'/user-profile'} className='flex items-center'><span className='text-2xl mr-2'><BsPerson/></span>Datos personales</Link>
            <Link to={'/'} className='flex items-center'><span className='text-2xl mr-2'><AiOutlineTool/></span>Ajustes</Link>
            <Link to={'/'} className='flex items-center'><span className='text-2xl mr-2'><MdOutlineSecurity/></span>Seguridad</Link>
        </div>
    )
}
