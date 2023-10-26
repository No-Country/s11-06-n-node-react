import user1 from '../../../public/user1.jpeg'
import { BsChevronDown } from 'react-icons/bs';
import { ImageProfileUserSmall } from '../Images/ImageProfileUser';
import LinksMenu from './LinksMenu';
import user4 from '../../../public/person4.png'


export default function Sidebar() {
    return (
        <div className="w-56 bg-greenPrimary text-white h-screen fixed px-4">
            <div className="flex items-center gap-x-3 py-10">
                <ImageProfileUserSmall imagen = {user4}/>
                <p className='font-bold'>Henry Ramirez</p>
                {/* <BsChevronDown/> */}
            </div>
            
            <LinksMenu/>
        </div>
    )
}
