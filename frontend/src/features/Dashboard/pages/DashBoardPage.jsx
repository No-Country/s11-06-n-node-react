import React from 'react'
import EventList from '../components/EventList'
import SearchBar from '../../../components/SearchBar/SearchBar'
import Noticias from '../sections/Noticias'
import Grupos from '../sections/Grupos'


export default function DashboardPage() {


    return (
        <div >

            <SearchBar/>
            <div className=' flex flex-col gap-y-20'>
                {/* <EventList/> */}
                <Noticias/>
                <Grupos/>
            </div>            
        </div>
    )
}
