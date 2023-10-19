import SearchBar from '../../../components/SearchBar/SearchBar'
import Sidebar from '../../../components/Sidebar/Sidebar'
import CardNoticia from '../components/CardNoticia'

export default function Noticias() {
    return (

        <div className='flex'>
            <div className='hidden md:block'><Sidebar/></div>

            <div className="mb-20 ml-0 md:ml-60 px-5 md:px-10 mx-auto w-full">
                <div className=' max-w-7xl mx-auto'>
                <SearchBar/>
                <h1 className='text-2xl font-bold my-10'>Noticias:</h1>

                <div className='grid xl:grid-cols-2 gap-10'>
                    <CardNoticia/>
                    <CardNoticia/>
                    <CardNoticia/>
                    <CardNoticia/>
                    <CardNoticia/>
                    <CardNoticia/>
                    <CardNoticia/>
                    <CardNoticia/>
                    <CardNoticia/>
                </div>
                    
                </div>
            </div>

        </div>

    )
}
