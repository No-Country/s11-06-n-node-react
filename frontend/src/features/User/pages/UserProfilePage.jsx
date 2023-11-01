
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
   (  <div className="mt-20 lg px-5 md:px-10 mx-auto w-full flex flex-col justify-evenly">
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
  {/* <div className='hidden lg:block'><ListCardFirends/></div> */}
  </div>
  );
};

export default UserProfile;