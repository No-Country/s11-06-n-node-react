import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar.jsx'
import NavBarUser from '../NavBarUser/NavBarUser.jsx'
import NavBar from '../NavBarUser/index.jsx'
import ListCardFirends from '../ListCardFriends/index.jsx'
import SideUsers from '../SideUsers/SideUsers.jsx'

export default function Layout() {   
    return (
        <>
            <div className='body-layout text-greenPrimary'>
                <NavBarUser/>       
                <div className='flex justify-between my-16 w-full px-5 lg:px-0'>
                    <div className='hidden lg:flex'><Sidebar/></div>
                    <div className='mx-auto lg:px-10 max-w-7xl w-full'><Outlet/></div>
                    <div className='hidden lg:flex'><SideUsers/></div>
                    {/* <div className='hidden lg:block'><ListCardFirends/></div> */}
                </div>
            </div>
        </>
    )
}
