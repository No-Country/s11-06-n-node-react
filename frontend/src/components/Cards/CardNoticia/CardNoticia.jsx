import user1 from '../../../../public/user1.jpeg'
import place1 from '../../../../public/place1.jpeg'
import { CiLocationOn } from 'react-icons/ci';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { MdRemoveRedEye } from 'react-icons/md';
import { ImageBg, ImageProfileUserMedium } from '../../Images/ImageProfileUser';

export default function CardNoticia() {
    return (
        <div className="border border-gray-100 rounded-lg shadow-lg">


            {/* ----- Portada */}
            <div className="h-28 md:h-40">
                <ImageBg imagen={place1}/>
                {/* <div className='text-xl'>
                    <div className='bg-gray-200 p-2 rounded-full'><BsShare/></div>
                    <div className='bg-gray-200 p-2 rounded-full'><MdFavoriteBorder/></div>
                </div> */}
            </div>



            {/* ----- Info */}
            <div className="px-7 py-5 flex flex-col max-w-4xl mx-auto">
                <div className='mb-8'>
                    <div className="flex justify-between items-center gap-x-5 mb-10">
                        <div>
                            <ImageProfileUserMedium imagen={user1}/>
                        </div>
                        <div className='flex flex-col w-full gap-y-2'>
                            <p className="text-xl font-bold text-end">Henry Ramirez</p>
                            <div className='flex items-center justify-end gap-x-3'>
                                <p className="">12/10/23</p>
                                <p className="border border-gray-500 px-2 py-1 rounded-2xl flex items-center text-sm"><p className='mr-1 text-xl -ml-1'><CiLocationOn/></p>Lima</p>
                            </div>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam sequi dolorem modi obcaecati inventore, mollitia natus, vitae sapiente autem unde sint esse. Facere, voluptas maiores?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam sequi dolorem modi obcaecati inventore, mollitia natus, vitae sapiente autem unde sint esse. Facere, voluptas maiores?</p>
                </div>


                <div className="flex justify-between items-center">
                    <p className='text-gray-500 text-sm flex justify-end items-center gap-x-1'>123 mates comentaron <span className='text-lg'><BiMessageRoundedDots/></span></p>
                    <button className='cursor-pointer flex items-center gap-x-2 border border-gray-500 px-3 py-1 rounded-2xl'>Ver más <span className='text-lg'><MdRemoveRedEye/></span></button>
                </div>
            </div>
        </div>
    )
}

