import SearchBar from '../../../components/SearchBar/SearchBar'
import Sidebar from '../../../components/Sidebar/Sidebar'
import ListCardFirends from '../../../components/ListCardFriends'

export default function PreguntasFrecuentesPage() {
    return (
        <div className='flex'>
            <div className='hidden lg:block'><Sidebar/></div>

            <div className="mb-20 ml-0 lg:ml-64 px-5 md:px-10 mx-auto w-full">
                <div className='max-w-7xl mx-auto'>
                    <SearchBar/>

                    <p>Preguntas Frecuentes</p>
                    <hr />
                </div>
            </div>

            <div className='hidden lg:block'><ListCardFirends/></div>
        </div>
    )
}
