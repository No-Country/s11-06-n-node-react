import { Outlet } from 'react-router-dom'
import  NavBar  from '../../components/NavBar/index.jsx'
export default function Layout() {
    return (
        <>
            <div className='body-layout text-greenPrimary'>
                <NavBar />             
                <div className='max-w-screen overflow-x-hidden lg:mt-10'>
                    <Outlet />
                </div>
                {/* <Footer/> */}
            </div>
        </>
    )
}
