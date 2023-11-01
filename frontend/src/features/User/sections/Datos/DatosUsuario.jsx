import { ImageProfileUserMedium } from '../../../../components/Images/ImageProfileUser'
import user1 from '../../../../../public/user1.jpeg'
import { FcPhoneAndroid } from 'react-icons/fc';

export default function DatosUsuario({userDetail}) {
    return (
        <div className="flex mt-4">
     <div className="w-1/4 text-center">
       <img
         src={userDetail.avatar} // Asegúrate de que userDetail.avatar contenga la URL de la imagen
         alt=""
         className="rounded-full w-32 h-32 border border-gray-300 mx-auto"
       />
     </div>
     <div className="w-3/4 pl-4 flex flex-col">
       <p className="text-2xl font-bold">
         {userDetail.name} {userDetail.lastname}
       </p>
       <p className="text-gray-600 mt-2.5">{userDetail.email}</p>
       <div className="text-gray-600 flex items-center"><FcPhoneAndroid></FcPhoneAndroid> {userDetail.phone}</div>
       <p className="text-gray-600">Fecha de Nacimiento: {userDetail.birthdate?userDetail.birthdate: 'no hay datos'}</p>
       <p className="text-gray-600">País: {userDetail.location}</p>
       <div className="flex flex-row">
          <p className="text-gray-600">Idiomas:</p>
          {userDetail.languages ? (
            userDetail.languages.map((language) => (
              <div className="ml-3" key={language.value}>
                <img src={language.flag} alt={language.label} title={language.label} className="w-6 h-6 object-cover" />
              </div>
            ))
          ) : (
            <div>
              Idiomas:
              <p>Que idiomas dominas?</p>
            </div>
          )}
        </div>
     </div>
   </div>
    )
}
