import Logo  from '../img/logo.png'
import { MapPinIcon } from '@heroicons/react/24/solid'
import { BellIcon } from '@heroicons/react/24/solid'

import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid'



function NavBar () {
    

    const activeStyle = 'underline underline-offset-4'

    return (
        <div className='hidden lg:flex  items-center top-0 justify-between fixed w-full  lg:px-2 lg:text-sm lg:font-light mb-2 bg-[#098D82] h-10'>
            <ul className='flex items-center'>
                <li className='mx-4'>
                <figure className='w-auto h-full px-3  flex items-center justify-center'>
                   <span>
                         <img src={Logo} className='w-67 h-40 object-cover' alt='logo de aplicacion' />
                    </span>
                </figure>
                </li>
                <li>
                    <MapPinIcon className='w-5 h-5' />
                </li>
                <li>
                    <p className='text-black text-base mx-1'>Ubicacion</p>
                </li>
                <li>
                <BellIcon />
                </li>
            </ul>
            <div className='flex mx-4'>
                <div className='flex '>
                    <BellIcon className='w-5 h-5 mr-4'/>
                    <ChatBubbleBottomCenterTextIcon className='w-5 h-5' />
                </div>
            </div>
        </div>
    )
}

export default NavBar