import { Outlet } from 'react-router-dom'
import  NavBar  from '../../components/NavBar/index.jsx'
export default function Layout() {
    return (
        <>
            <div className='body-layout'>

                <NavBar />             
                <div className='max-w-screen overflow-x-hidden'>
                    <Outlet />
                </div>
                {/* <Footer/> */}
            </div>
        </>
    )
}
