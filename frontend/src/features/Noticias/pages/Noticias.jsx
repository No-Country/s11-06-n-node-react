import SearchBar from '../../../components/SearchBar/SearchBar'
import Sidebar from '../../../components/Sidebar/Sidebar'

export default function Noticias() {
    return (

        <div className='flex'>
            <div className='hidden md:block'><Sidebar/></div>

            <div className="mb-20 ml-0 md:ml-60 px-5 md:px-10 mx-auto w-full">
                <SearchBar/>
                <h1>Noticias</h1>
            </div>

        </div>

    )
}
