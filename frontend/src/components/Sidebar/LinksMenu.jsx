import { BsPerson, BsNewspaper } from 'react-icons/bs';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { AiFillTags, AiOutlineQuestionCircle, AiOutlineTool } from 'react-icons/ai';
import { GrGroup } from 'react-icons/gr';
import { MdOutlineSecurity } from 'react-icons/md';

export default function LinksMenu() {
    return (
        <div className='flex flex-col gap-y-5'>
            <p className='flex items-center'><span className='text-2xl mr-2'><BsPerson/></span>Datos personales</p>
            <p className='flex items-center'><span className='text-2xl mr-2'><FaHandHoldingHeart/></span>Favoritos</p>
            <p className='flex items-center'><span className='text-2xl mr-2'><AiFillTags/></span>Eventos</p>
            <p className='flex items-center'><span className='text-2xl mr-2'><BsNewspaper/></span>Noticias</p>
            <p className='flex items-center'><span className='text-2xl mr-2'><GrGroup/></span>Grupos</p>
            <p className='flex items-center'><span className='text-2xl mr-2'><AiOutlineQuestionCircle/></span>Preguntas frecuentes</p>
            <p className='flex items-center'><span className='text-2xl mr-2'><AiOutlineTool/></span>Ajustes</p>
            <p className='flex items-center'><span className='text-2xl mr-2'><MdOutlineSecurity/></span>Seguridad</p>
        </div>
    )
}
