import React from 'react'
import EventList from '../components/EventList'
import Noticias from '../components/Noticias'
import SearchBar from '../../../components/SearchBar/SearchBar'

export default function DashboardPage() {
    return (
        <div className="mx-7 mb-20">
            <SearchBar/>
            <div className=''></div> <EventList/>
            <div className='mt-20'></div> <Noticias/>
        </div>
    )
  
}
