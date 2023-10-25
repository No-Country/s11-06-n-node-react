import datos from "./datos";
import Usuario from '../CardFriends'

function ListCardFirends() {
    return(
        <div className='hidden md:w-1/6 md:h-full md:px-3 bg-[#D9D9D9] md:pt-20 md:flex md:flex-col  md:items-center'>
            <p>Lista de amigos</p>
            <div className='w-full flex flex-col justify-center items-center'>
                {datos.map(usuario => (
                    <Usuario key={usuario.id} usuario={usuario} />
                ))}
            </div>
        </div>
    )
}

export default ListCardFirends