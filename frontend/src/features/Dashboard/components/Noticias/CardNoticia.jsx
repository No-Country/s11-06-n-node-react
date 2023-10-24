import user1 from '../../../../../public/user1.jpeg'
import { CiLocationOn } from 'react-icons/ci';
import { ImageProfileUserMedium } from '../../../../components/Images/ImageProfileUser';

export default function CardNoticia() {
    return (
        <div className="border border-gray-100 rounded-lg shadow-lg max-w-md">


            {/* ----- Portada */}
            <div className="h-28 bg-gray-200 rounded-t-lg border-6 border-red-500">
            </div>



            {/* ----- Info */}
            <div className="px-7 py-8 flex flex-col">
                <div className='mb-12'>
                    <div className="flex justify-between items-center mb-5">
                        <ImageProfileUserMedium imagen={user1}/>
                        <div>
                            <p className="text-xl font-bold">Juanito Alimaña</p>
                            <p className="text-end">12/10/23</p>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam sequi dolorem modi obcaecati inventore, mollitia natus, vitae sapiente autem unde sint esse. Facere, voluptas maiores?</p>
                </div>


                <div className="flex justify-between items-center">
                <p className="border border-gray-500 px-2 py-1 rounded-2xl flex items-center w-fit mt-2 md:mt-0 text-sm"><p className='mr-1 text-xl -ml-1'><CiLocationOn/></p>Punta Cana</p>
                    <button className='cursor-pointer'>Ver más...</button>
                </div>
            </div>
        </div>
    )
}

