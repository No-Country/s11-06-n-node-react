import { BsChevronDown } from 'react-icons/bs';
import CardNoticia from './CardNoticia';
import { Link } from 'react-router-dom'

export default function Noticias() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-7">Noticias:</h1>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 place-items-center gap-10">
                <CardNoticia/>
                <CardNoticia/>
                <CardNoticia/>
            </div>

            <div className="my-10 border-b-2 border-gray-300 pb-2">
                <Link to={'/noticias'} className="w-full flex justify-end items-center cursor-pointer">Más noticias <span className="ml-2 text-xl"><BsChevronDown/></span></Link>
            </div>
        </div>
    )
}