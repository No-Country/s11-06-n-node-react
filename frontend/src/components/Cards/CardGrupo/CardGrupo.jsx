import { CiLocationOn } from 'react-icons/ci';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { MdRemoveRedEye } from 'react-icons/md';
import { ImageBg, ImageProfileUserMedium } from '../../Images/ImageProfileUser';
import { Link } from 'react-router-dom'
import BtnViewComments from '../../Buttons/BtnViewComments';

export default function CardGrupo({ _id, image, name }) {


    return (
        <div className="border border-gray-100 rounded-lg shadow-lg max-w-[200px] min-w-[200px]">


            {/* ----- Portada */}
            <div className="h-28 md:h-40">
                <ImageBg imagen={image}/> 
            </div>



            {/* ----- Info */}
            <div className="px-7 py-5 flex flex-col max-w-4xl mx-auto">
                <div className='mb-8'>
                    
                    <p className='text-xl'>{name}</p>
                </div>


                <div className="flex justify-end items-center">
                    <Link to={`/grupos/${_id}`} className='cursor-pointer flex items-center gap-x-2 border border-gray-500 px-3 py-1 rounded-full text-2xl'>+</Link>
                </div>
            </div>
        </div>
    )
}

