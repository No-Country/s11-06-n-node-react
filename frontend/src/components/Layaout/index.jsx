import { Outlet } from 'react-router-dom'
import  NavBar  from '../../components/NavBar/index.jsx'
import ListFriends from '../ListCardFriends/index.jsx'
export default function Layout() {
    return (
        <>
            <div className='body-layout'>
                <div>
                    <NavBar />
                </div>  
                <div>
                    <div className='max-w-screen overflow-x-hidden  lg:mt-10 '>
                        <Outlet />
                    </div>
                    <div className='lg:block'>
                        {/* <ListFriends /> */}
                    </div>
                </div>           

                
                {/* <Footer/> */}
            </div>
        </>
    )
}
