import { MapPinIcon } from '@heroicons/react/24/solid'

function InfoFriend() {
    return (
        <div className='w-fullflex justify-center'>
                    <div className='w-full h-60 flex justify-around items-center'>
                        <div className='flex ml-7 items-center'>
                        <div className='w-36 h-36 mr-4 flex  '>
                        <figure>
                            <span>
                            <img className='w-full h-full rounded-full border-4 border-solid border-[#32bfeb]' src='https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg' alt='foto de perifl' />
                            </span>
                        </figure>
                    </div>
                    <div className='mx-3'>
                        <p className='font-bold text-white text-2xl'>Cristian Cortes Mondragon</p>
                        <div className='idiomas flex  items-center mt-1'>
                            <p className='text-white text-2xl mx-2'>Habla:</p>
                            <figure>
                                <span>
                                    <img className='w-7 h-7 rounded-full' src='https://www.astroninternacional.es/18829-large_default/bandera-espana-con-escudo-constitucional-exterior.jpg' alt='basndera de espana' />
                                </span>
                            </figure>
                        </div>
                    </div>
                        </div>
                    <div className=' mr-10'>
                        <div className='flex mx-5 h-full items-center'>
                            <MapPinIcon className='w-7 h-7 ml-5' />
                            <p className='text-black text-xl mx-1'>Ubicacion</p>
                        </div>
                    </div>

                    </div>
                </div>
    )
}

export default InfoFriend