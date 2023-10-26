import datos from "./datos";
import Usuario from '../CardFriends'
import Residentes from './datosF'

function ListCardFirends() {
    return(
        <div className='hidden md:w-48 h-screen md:px-3 bg-greenPrimary md:pt-20 md:flex md:flex-col   md:items-center'>
            <div className='flex flex-col my-2 w-full'>
            <p className='font-bold text-m text-graySecundary'>Personas Activas</p>
            <p className='p-o text-s text-graySecundary'>Cerca tuyo</p>
            </div>
            <div className='w-full flex flex-col justify-center items-center'>
                {datos.map(usuario => (
                    <Usuario key={usuario.id} usuario={usuario} />
                ))}
            </div>
            <div className='flex flex-col my-2 w-full'>
            <p className='font-bold text-m text-graySecundary'>Residentes</p>
            <p className='p-o text-s text-graySecundary'>Con buenas valraciones</p>
            </div>
            <div className='w-full flex flex-col justify-center items-center'>
                {Residentes.map(residente => (
                    <Usuario key={residente.id} usuario={residente} />
                ))}
            </div>
        </div>
    )
}

export default ListCardFirends