import { BsShare } from 'react-icons/bs';
import { MdFavoriteBorder } from 'react-icons/md';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';

import user1 from '../../../../public/user1.jpeg'
import place1 from '../../../../public/place1.jpeg'

import { ImageProfileUserSmall, ImageBg } from "../../../components/Images/ImageProfileUser";

export default function CardNoticia() {
    return (
        <div className="border border-gray-200 flex p-5 rounded-lg shadow-lg">
            {/* Images */}
            <div className='w-1/3 border bg-gray-200'>
                <ImageBg imagen={place1}/>
            </div>


            <div className='w-2/3 pl-4 flex flex-col gap-y-5'>
                <div className='flex items-center gap-x-3'>
                    <div>
                        <ImageProfileUserSmall imagen={user1}/>
                    </div>
                    <div className='w-full relative'>
                        <p className='font-bold'>Henry Ramirez</p>
                        <div className='flex flex-col sm:flex-row justify-between sm:items-center'>
                            <p>12/10/23</p>
                            <p className="border border-gray-500 px-2 py-1 rounded-2xl flex items-center w-fit mt-2 md:mt-0 text-sm"><p className='mr-1 text-xl -ml-1'><CiLocationOn/></p>Punta Cana</p>
                        </div>
                        <div className='flex text-xl gap-x-3 absolute right-1 bottom-24 sm:bottom-14'>
                            <div className='bg-gray-200 p-2 rounded-full'><BsShare/></div>
                            <div className='bg-gray-200 p-2 rounded-full'><MdFavoriteBorder/></div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-y-5'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aperiam dignissimos blanditiis ipsam ipsa hic dolorem magni magnam fugiat voluptatum?</p>
                    <p className='text-gray-500 text-sm flex justify-end items-center gap-x-1'>123 mates comentaron <span className='text-lg'><BiMessageRoundedDots/></span></p>
                </div>
            </div>
        </div>
    )
}
