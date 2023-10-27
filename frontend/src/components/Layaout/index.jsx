import { Outlet } from 'react-router-dom'
import  NavBar  from '../../components/NavBar/index.jsx'
import Sidebar from '../Sidebar/Sidebar.jsx'
import ListCardFirends from '../ListCardFriends/index.jsx'

export default function Layout() {   
    return (
        <>
            <div className='body-layout text-greenPrimary'>
                <NavBar />             
                <div className='max-w-screen overflow-x-hidden lg:mt-10'>
                    {/* <Sidebar/> */}
                    <Outlet />
                    {/* <ListCardFirends/> */}
                </div>
                {/* <Footer/> */}
            </div>
        </>
    )
}
