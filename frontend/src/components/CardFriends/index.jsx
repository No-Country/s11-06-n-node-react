



function CardFriend({usuario}) {
    return (
        <div className='bg-[#555050] cursor-pointer w-11/12 h-20 shadow-xl rounded-lg my-3 flex flex-col'>
            <div className='relative h-12 w-12 '>
                <figure className='  absolute -top-2 -left-2'>
                    <span >
                        <img className='h-12 w-12 rounded-full border border-solid border-black' src={usuario.perfil} alt={`foto de perfil de ${usuario.nombre}`} />
                    </span>
                </figure>   
                <div className='absolute top-2 left-12'>
                    <p className='text-white font-medium'>
                    {usuario.nombre}
                    </p>
                </div> 
            </div>
 
            <div className="w-full flex justify-center items-end mb-1">
                
                <div className='flex w-full justify-start items-center px-1'>
                    <div className='h-4 w-full rounded-full flex justify-start items-center'>
                        <p className="px-2 text-white font-normal">Habla: </p>
                        <img className='h-4 w-4 rounded-full' src={usuario.idioma} alt={`el usuario habla espanol`}/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default CardFriend
