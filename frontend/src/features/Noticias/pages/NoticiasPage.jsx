import CardNoticia from '../../../components/Cards/CardNoticia/CardNoticia'
import SearchBar from '../../../components/SearchBar/SearchBar'
import Sidebar from '../../../components/Sidebar/Sidebar'

export default function NoticiasPage() {
    return (

        <div className='flex'>
            <div className='hidden md:block'><Sidebar/></div>

            <div className="mb-20 ml-0 md:ml-64 px-5 md:px-10 mx-auto w-full">
                <div className=' max-w-7xl mx-auto'>
                    <SearchBar/>
                    <h1 className='text-2xl font-bold my-10'>Noticias:</h1>

                    <div className='flex flex-col gap-10 md:gap-y-20'>
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
