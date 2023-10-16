import { Outlet } from 'react-router-dom'
export default function Layout() {
    return (
        <>
            <div className='body-layout'>
                hola
                {/* <Navbar />             */}
                <div className='max-w-screen lg:w-10/12 overflow-x-hidden' >
                    <Outlet />
                </div>
                {/* <Footer/> */}
            </div>
        </>
    )
}
