import React from 'react'
import EventList from '../components/EventList'
import Noticias from '../components/Noticias'
import SearchBar from '../../../components/SearchBar/SearchBar'
import Sidebar from '../../../components/Sidebar/Sidebar'
import NavBar from '../../../components/NavBar'

export default function DashboardPage() {
    return (
        <div className='flex'>
            <div className='hidden lg:block'><Sidebar/></div>

            <div className="mb-20 ml-0 lg:ml-60 px-5 md:px-10 mx-auto w-full">
                <div className='max-w-7xl mx-auto'>
                    <SearchBar/>
                    {/* <EventList/> */}
                    <div className=''><Noticias/></div>
                </div>
            </div>
        </div>
    )
}