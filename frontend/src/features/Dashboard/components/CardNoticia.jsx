import user1 from '../../../../public/user1.jpeg'
import { CiLocationOn } from 'react-icons/ci';

export default function CardNoticia() {
    return (
        <div className="border border-gray-100 rounded-lg shadow-lg max-w-md">


            {/* ----- Portada */}
            <div className="h-28 bg-gray-200 rounded-t-lg border-6 border-red-500">
            </div>



            {/* ----- Info */}
            <div className="px-7 py-8 flex flex-col justify-between h-96">
                <div>
                    <div className="flex justify-between items-center mb-5">
                        <div 
                            className="w-20 h-20 rounded-full bg-cover bg-center"
                            style={{backgroundImage: `url(${user1})`}}
                        >
                        </div>
                        <div>
                            <p className="text-xl font-bold">Juanito Alimaña</p>
                            <p className="text-end">12/10/23</p>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam sequi dolorem modi obcaecati inventore, mollitia natus, vitae sapiente autem unde sint esse. Facere, voluptas maiores?</p>
                </div>


                <div className="flex justify-between items-center">
                    <p className="border border-gray-500 px-4 py-1 rounded-2xl flex items-center"><p className='mr-1 text-xl'><CiLocationOn/></p> Punta Cana</p>
                    <button className='cursor-pointer'>Ver más...</button>
                </div>
            </div>
        </div>
    )
}

