
import React, { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { getEventsUser, getGroupsUser, getNewsUser, getUserDetail } from "../../../Redux/Actions/UserGet";
import { useDispatch, useSelector } from "react-redux";
import Cookies from 'js-cookie';
import Sidebar from '../../../components/Sidebar/Sidebar'
import ListCardFirends from '../../../components/ListCardFriends'
import ModalEditUser from "../../../components/Modals/ModalEditUser";
import DatosUsuario from "../sections/Datos/DatosUsuario";
import HistorialUsuario from "../sections/Historial/HistorialUsuario";


const UserProfile = () => {
const cookieData = Cookies.get('data');
const [actualUser, setactualUser] = useState();
const userDetail = useSelector((state) => state.user.userDetail);
const userGroups = useSelector((state) => state.user.userGroups);
const userEvents = useSelector((state) => state.user.userEvents);
const userNews = useSelector((state) => state.user.userNews);
const dispatch = useDispatch();
console.log(userEvents);
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

  useEffect(() => {
 if (cookieData && !actualUser) {
  const userData = JSON.parse(cookieData);

  if(userData){
    setactualUser(userData)
   
    // console.log(userData.token);
  }
} else {
  console.log("Usuario cargado");
}
    }, [cookieData, actualUser, dispatch]);
  
    useEffect(() => {
      if (actualUser) {
        dispatch(getUserDetail(actualUser));
        dispatch(getGroupsUser(actualUser));
        dispatch(getEventsUser(actualUser));
        dispatch(getNewsUser(actualUser));
      }
    }, [actualUser, dispatch]);

console.log(userDetail);

  return (
    <div className='flex'>
    {userDetail ? 
   (  <div className="mb-20 ml-0 lg:ml-64 px-5 md:px-10 mx-auto w-full flex flex-col justify-evenly">
   <div className="flex justify-between items-center">
     <h2 className="undefined text-greenPrimary text-2xl font-bold mb-10">Perfil de Usuario</h2>
     <button className="text-gray-600 flex items-center">
    <ModalEditUser 
    user={userDetail} 
    token= {actualUser?.accessToken}
    ></ModalEditUser>
     </button>
   </div>
   <DatosUsuario userDetail={userDetail}></DatosUsuario>
   <HistorialUsuario userEvents={userEvents} formatDate={formatDate} userGroups={userGroups} userNews={userNews}></HistorialUsuario>

 </div>
  ):(
    <div>Cargando...</div>
  )}
  <div className='hidden lg:block'><ListCardFirends/></div>
  </div>
  );
};

export default UserProfile;


//sin sections
   {/* <div className="mt-8">
     <div className="flex">
       <div className="w-2/3 pr-3">
       <div className="border p-4">
        <h3 className="text-xl font-semibold">Eventos Creados</h3>
        <hr className="mb-2"/>
        {userEvents?.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {userEvents.slice(0, 2).map((event) => (
              <li key={event.id} className="border rounded p-2 flex flex-col justify-end items-center">
                <div className="w-300 h-auto mr-300">
                    <img
                      src={event.image}
                      alt={`${event.name} logo`}
                      className="w-full h-full "
                    />
                  </div>
                  <p className="font-semibold">{event.name}</p>
                  <p className="text-sm">{event.location}</p>
                  <p className="text-sm">{formatDate(event.date)}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Aún no has creado ningún evento.</p>
        )}
        <div className="w-full flex flex-row justify-end items-center">
          <button
          className="bg-greenPrimary text-white py-2 px-4 rounded-full  cursor-pointer hover:bg-greenSecundary duration-75 mt-4"
          onClick={() => history.push("/todos-los-eventos")}
        >
         <IoIosArrowForward></IoIosArrowForward>
        </button>
        </div>
        
      </div>
       </div>
       <div className="w-1/2 pl-3">
         <div className="border p-4">
           <h3 className="text-xl font-semibold">Historial de Posteos</h3>
         </div>
       </div>
     </div>
   </div> */}
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
   {/* <div className="mt-4">
        <div className="border p-4">
          <h3 className="text-xl font-semibold mb-4">Grupos a los que perteneces</h3>
          <hr />
          {userGroups?.length > 0 ? (
            <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {userGroups?.map((group) => (
                <li key={group.id} className="flex items-center mt-2.5">
                  <div className="w-10 h-10 mr-2">
                    <img
                      src={group.image}
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

