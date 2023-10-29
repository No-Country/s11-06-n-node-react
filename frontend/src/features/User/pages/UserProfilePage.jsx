
import React, { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { getGroupsUser, getUserDetail } from "../../../Redux/Actions/UserGet";
import { useDispatch, useSelector } from "react-redux";
import Cookies from 'js-cookie';
import Sidebar from '../../../components/Sidebar/Sidebar'
import ListCardFirends from '../../../components/ListCardFriends'
import { FcPhoneAndroid } from 'react-icons/fc';
import ModalEditUser from "../../../components/Modals/ModalEditUser";

const UserProfile = () => {
const cookieData = Cookies.get('data');
const [actualUser, setactualUser] = useState();
const userDetail = useSelector((state) => state.user.userDetail);
const userGroups = useSelector((state) => state.user.userGroups);
const dispatch = useDispatch();

  useEffect(() => {
 if (cookieData && !actualUser) {
  const userData = JSON.parse(cookieData);
  if(userData){
    setactualUser(userData)
    // console.log(userData);
  }
} else {
  console.log(userDetail);
}
    }, [cookieData, actualUser, dispatch]);
  
    useEffect(() => {
      if (actualUser) {
        dispatch(getUserDetail(actualUser));
        dispatch(getGroupsUser(actualUser));
        
      }
    }, [actualUser, dispatch]);



  return (
    <div className='flex'>
            <div className='hidden lg:block'><Sidebar/></div>
    {userDetail ? 
   (  <div className="mb-20 ml-0 lg:ml-64 px-5 md:px-10 mx-auto w-full flex flex-col justify-evenly">
   <div className="flex justify-between items-center">
     <h2 className="undefined text-greenPrimary text-2xl font-bold mb-10">Perfil de Usuario</h2>
     <button className="text-gray-600 flex items-center">
     <ModalEditUser></ModalEditUser>
       {/* Modificar Datos */}
       {/* <FiEdit className="ml-2" /> */}
       {/* Agrega el enlace a la ruta de edición de perfil aquí */}
     </button>
   </div>

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
       <div>
         <p className="text-gray-600">
         Idiomas: {userDetail.languages?.join(', ')}
       </p>
       <img src="" alt="" />
       </div>
     </div>
   </div>

   <div className="mt-8">
     <div className="flex">
       <div className="w-1/2 pr-3">
         <div className="border p-4">
           <h3 className="text-xl font-semibold">Eventos Creados</h3>
           {/* Muestra eventos creados aquí */}
         </div>
       </div>
       <div className="w-1/2 pl-3">
         <div className="border p-4">
           <h3 className="text-xl font-semibold">Historial de Posteos</h3>
           {/* Muestra historial de posteos aquí */}
         </div>
       </div>
     </div>
   </div>
{/* 
   <div className="mt-4">
     <div className="flex">
       <div className="w-1/2 pr-3">
         <div className="border p-4">
           <h3 className="text-xl font-semibold">Historial Reservas</h3>
         </div>
       </div>
     </div>
   </div> */}
   <div className="mt-4">
        <div className="border p-4">
          <h3 className="text-xl font-semibold mb-4">Grupos a los que perteneces</h3>
          <hr />
          {userGroups?.length > 0 ? (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {userGroups?.map((group) => (
                <li key={group.id} className="flex items-center mt-2.5">
                  <div className="w-16 h-16 mr-2">
                    <img
                      src={group.image} // Reemplaza con la URL de la imagen del grupo
                      alt={`${group.name} logo`}
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <span>{group.name}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>Aún no te has unido a ningún grupo.</p>
          )}
        </div>
      </div>
 </div>
  ):(
    // Puedes mostrar un indicador de carga aquí si lo deseas
    <div>Cargando...</div>
  )}
  <div className='hidden lg:block'><ListCardFirends/></div>
  </div>
  );
  //   userDetail &&
  //  ( <div className="w-3/6 mx-auto mt-8 border border-gray-300 rounded-lg p-4 relative">
  //     <button className="text-gray-600 flex items-center absolute top-0 right-0 mt-4 mr-4">
  //       Modificar Datos
  //       <FiEdit className="ml-2" />
  //       {/* LINK A LA RUTA PARA MODIFICAR EL PERFIL */}
  //     </button>

  //     <div className="flex justify-center mt-4">
  //       <div className="w-1/3 text-center">
  //         <img
  //               src="URL_DE_LA_IMAGEN"
  //           //src= {userDetail.avatar}
  //           alt=""
  //           className="rounded-full w-48 h-48 border border-gray-300 mx-auto"
  //         />
  //       </div>
  //       <div className="w-2/3 pl-4">
  //       {/* <p className="text-2xl font-bold">{userDetail.name} {userDetail.lastname}</p>
  //         <p className="text-gray-600">{userDetail.email}</p>
  //         <p className="text-gray-600">{userDetail.phone}</p>
  //         <p className="text-gray-600">Fecha de Nacimiento: {userDetail.birthdate}</p>
  //         <p className="text-gray-600">País: {userDetail.location}</p>
  //         <p className="text-gray-600">Idiomas: {userDetail.languages.join(', ')}</p> */}
  //              {/* <p className="text-2xl font-bold">Lorena Love</p> */}
  //              <p className="text-2xl font-bold">{actualUser.name}</p>
  //              {/* <p className="text-2xl font-bold">Lorena Love</p> */}
               
  //         <p className="text-gray-600">{userDetail?.email}</p>
  //         <p className="text-gray-600">+549 11 6565 6565</p>
  //         <p className="text-gray-600">Fecha de Nacimiento: 29/09/1990</p>
  //         <p className="text-gray-600">País: Argentina</p>
  //         <p className="text-gray-600">Idioma: Español</p>
  //       </div>
  //     </div>

  //     <div className="mt-8">
  //       <div className="flex">
  //         <div className="w-1/3 pr-3">
  //           <div className="border p-4">
  //             <h3 className="text-xl font-bold">Eventos Creados</h3>
  //             {/* muestra eventos creados */}
  //           </div>
  //         </div>
  //         <div className="w-1/3 pl-3">
  //           <div className="border p-4">
  //             <h3 className="text-xl font-bold">Historial de Reservas</h3>
  //             {/* muestra historial de reservas */}
  //           </div>
  //         </div>
  //       </div>
  //     </div>


  //     <div className="mt-4">
  //       <div className="flex">
  //         <div className="w-1/3 pr-3">
  //           <div className="border p-4">
  //             <h3 className="text-xl font-bold">Historial Posteos</h3>
  //             {/* muestra de historial de posteos */}
  //           </div>
  //         </div>
  //         <div className="w-1/3 pl-3">
  //           <div className="border p-4">
  //             <h3 className="text-xl font-bold">Grupos que eres parte</h3>
  //             {/* muestra grupos a los que se unió */}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>)
  // );
};

export default UserProfile;
