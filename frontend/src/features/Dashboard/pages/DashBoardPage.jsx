import React from 'react'
import EventList from '../components/EventList'
import SearchBar from '../../../components/SearchBar/SearchBar'
import Sidebar from '../../../components/Sidebar/Sidebar'
<<<<<<< HEAD:frontend/src/features/Dashboard/pages/index.jsx

=======
>>>>>>> 52c6ba13dab0223e1dd4fa28b9eed3a8e59cafcc:frontend/src/features/Dashboard/pages/DashBoardPage.jsx
import Noticias from '../sections/Noticias'
import Eventos from '../sections/Eventos'
import Grupos from '../sections/Grupos'
import ListCardFirends from '../../../components/ListCardFriends'

export default function DashboardPage() {
    return (
        <div className='flex'>
            <div className='hidden lg:block'><Sidebar/></div>

            <div className="mb-20 ml-0 lg:ml-64 px-5 md:px-10 mx-auto w-full">
                <div className='max-w-7xl mx-auto'>
                    <SearchBar/>
                    <EventList/>
                    <Noticias/>
                    <Grupos/>
                </div>
            </div>
            
            <div className='hidden lg:block'><ListCardFirends/></div>
        </div>
    )
}
