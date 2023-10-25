import SearchBar from '../../../components/SearchBar/SearchBar'
import ListCardFirends from '../../../components/ListCardFriends'
import Sidebar from '../../../components/Sidebar/Sidebar'

export default function EventosPage() {
    return (
        <div className='flex'>
            <div className='hidden lg:block'><Sidebar/></div>

            <div className="mb-20 ml-0 lg:ml-64 px-5 md:px-10 mx-auto w-full">
                <div className='max-w-7xl mx-auto'>
                    <SearchBar/>

                    <p>Eventos</p>
                    <hr />
                </div>
            </div>

            <div className='hidden lg:block'><ListCardFirends/></div>
        </div>
    )
}
