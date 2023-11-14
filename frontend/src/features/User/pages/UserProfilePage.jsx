
import React, { useState, useEffect } from "react";
import { getEventsUser, getGroupsUser, getNewsUser, getUserDetail } from "../../../Redux/Actions/UserGet";
import { useDispatch, useSelector } from "react-redux";
import Cookies from 'js-cookie';
import ModalEditUser from "../../../components/Modals/ModalEditUser";
import DatosUsuario from "../sections/Datos/DatosUsuario";
import HistorialUsuario from "../sections/Historial/HistorialUsuario";
import { getAllFlags } from "../../../Redux/Actions/FlagGet";

let loader = "/loadermate.gif"

const UserProfile = () => {
const cookieData = Cookies.get('data');
const [actualUser, setactualUser] = useState();
const userDetail = useSelector((state) => state.user.userDetail);
const userGroups = useSelector((state) => state.user.userGroups);
const userEvents = useSelector((state) => state.user.userEvents);
const userNews = useSelector((state) => state.user.userNews);
const dispatch = useDispatch();
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
        dispatch(getAllFlags());
      }
    }, [actualUser, dispatch]);

// console.log(userDetail);

  return (
    <div className='flex bg-[#FFFFFF] w-[100%]'>
    {userDetail ? 
   (  <div className="mt-10 lg px-5  mx-auto w-full flex flex-col justify-evenly ">
   <div className="flex justify-between items-center">
     <h2 className="undefined text-greenPrimary text-2xl font-bold mb-8">Perfil</h2>
     <button className="text-gray-600 flex items-center">
      
    <ModalEditUser 
    user={userDetail} 
    token= {actualUser?.accessToken}
    ></ModalEditUser>
     </button>
   </div>
   <DatosUsuario userDetail={userDetail}></DatosUsuario>
   <hr className="mb-4 mt-2 bg-grayPrimary mt-4" />
   {userEvents && userNews && userGroups?
   <HistorialUsuario userEvents={userEvents} formatDate={formatDate} userGroups={userGroups} userNews={userNews}></HistorialUsuario> : 
   <div className="w-[100%] h-[100%] justify-center mt-8 flex"><img src={loader} className="h-[100%] w-[50%]" alt="Cargando..." /></div>
}
 </div>
  ):(
    <div>Cargando...</div>
  )}
  {/* <div className='hidden lg:block'><ListCardFirends/></div> */}
  </div>
  );
};

export default UserProfile;