import { Link } from 'react-router-dom';
import Logo  from '../img/logo-1.png'
import { FiMenu } from 'react-icons/fi';



export default function NavBarUser() {
    return (
        <div className="bg-white h-16 fixed top-0 w-full flex justify-between items-center z-10 px-3 md:px-10 shadow-md opacity-90">
            <span className='w-40'><Link to={'/dashboard'}><img src={Logo}/></Link></span>
                
            <span className='text-3xl cursor-pointer md:hidden'><FiMenu/></span>
        </div>
    )
}
