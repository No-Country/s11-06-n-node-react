import { ImageProfileUserMedium } from '../../../../components/Images/ImageProfileUser'
import user1 from '../../../../../public/user1.jpeg'

export default function DatosUsuario() {
    return (
        <div>
            <div className='flex'>
                <div>
                    <ImageProfileUserMedium imagen={user1}/>
                    <img src="" alt="" />
                </div>
                <div>
                    <p>Nombre</p>
                    <p>correo@gmail.com</p>
                </div>
            </div>
            <div>
                <p>+45 433434343</p>
                <p>Fecha de nacimiento</p>
                <p>Pais</p>
                <p>Idiomas</p>
            </div>
        </div>
    )
}
