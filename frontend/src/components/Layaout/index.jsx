import { Outlet } from 'react-router-dom'
export default function Layout() {
    return (
        <>
            <div className='body-layout'>

                {/* <Navbar />             */}
                <div className='max-w-screen overflow-x-hidden'>
                    <Outlet />
                </div>
                {/* <Footer/> */}
            </div>
        </>
    )
}