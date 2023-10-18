import React from 'react'
import EventList from '../components/EventList'
import Noticias from '../components/Noticias'
import SearchBar from '../../../components/SearchBar/SearchBar'
import Sidebar from '../../../components/Sidebar/Sidebar'

export default function DashboardPage() {
    return (

        <div className='flex'>
            <div className='hidden md:block'><Sidebar/></div>

            <div className="mb-20 ml-0 md:ml-60 px-5 md:px-10 mx-auto w-full">
            {/* <div className=" md:max-w-7xl mx-7 xl:mx-auto mb-20"> */}
                <SearchBar/>
                {/* <EventList/> */}
                <div className='mt-20'><Noticias/></div>
            </div>
        </div>

    )
}
