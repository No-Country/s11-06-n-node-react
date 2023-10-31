import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar.jsx'
import ListCardFirends from '../ListCardFriends/index.jsx'
import NavBarUser from '../NavBarUser/NavBarUser.jsx'
import NavBar from '../NavBarUser/index.jsx'

export default function Layout() {   
    return (
        <>
            <div className='body-layout text-greenPrimary'>
                {/* <NavBar />    */}
                <NavBarUser/>          
                <div className='max-w-screen overflow-x-hidden mt-16'>
                    {/* <Sidebar/> */}
                    <Outlet />
                    {/* <ListCardFirends/> */}
                </div>
                {/* <Footer/> */}
            </div>
        </>
    )
}
