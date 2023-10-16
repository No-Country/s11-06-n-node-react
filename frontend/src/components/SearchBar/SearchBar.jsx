import BtnAddEvent from "./BtnAddEvent";
import { HiOutlineFilter } from 'react-icons/hi';
import { BsSearch } from 'react-icons/bs';

export default function SearchBar() {
    return (
        <div className="flex gap-x-6 md:gap-x-14 my-8 h-20">


            <div className="w-full relative flex items-center">
                <button className="absolute left-3 top-auto text-2xl text-gray-400"><HiOutlineFilter/></button>
                <input 
                    type="text" 
                    placeholder="Buscar eventos"
                    className="border border-gray-300 w-full py-3 pl-11 rounded-md" 
                />
                <div className="absolute right-3 top-auto text-2xl text-gray-500"><BsSearch/></div>
            </div>


            <BtnAddEvent/>
        </div>
    )
}
