import { BsChevronDown } from 'react-icons/bs';
import { Link } from 'react-router-dom'
import CardNoticia from '../../../components/Cards/CardNoticia/CardNoticia';

export default function Noticias() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-7">Últimas noticias:</h1>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
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
