import { CiLocationOn } from "react-icons/ci";
import { BiMessageRoundedDots } from "react-icons/bi";
import { MdRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  ImageBg,
  ImageProfileUserMedium,
} from "../../../components/Images/ImageProfileUser";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { joinUser } from "../../../Redux/Actions/GroupGet";




export default function CardGrupoPage({
  _id,
  name,
  location,
  imageUser,
  imagePlace,
  title,
  date,
  description,
  usersAdmin,
  usersPending,
  usersCommon
}) {

  // console.log("admin", usersAdmin);
  // console.log("pendientes", usersPending);
  // console.log("comunes", usersCommon);



  const cookieData = Cookies.get('data');
  const [actualUser, setactualUser] = useState();
  const [isUserInGroup, setisUserInGroup] = useState(false);
  const [isRequestPending , setisRequestPending ] = useState(false);
  const dispatch = useDispatch()

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

 useEffect(()=>{
if(actualUser){
        // Verificar si el actualUser está en el grupo

const UserInGroup = usersCommon.some(user => user._id === actualUser.user._id) || usersAdmin.some(user => user._id === actualUser.user._id)
setisUserInGroup(UserInGroup)
// Verificar si el actualUser envió una solicitud
const RequestPending = usersPending.some(user => user._id === actualUser.user._id)
setisRequestPending(RequestPending)
       }

 }, [actualUser, usersCommon, usersAdmin, usersPending])      
       console.log("user en el grupo",isUserInGroup, "solicitud pendiente",isRequestPending);


  // const [join, setJoin] = useState(false);
  
  const handlerJoin = () => {
    console.log("boton unirse"); 
    dispatch(joinUser(_id, actualUser.user._id))
    setisRequestPending(true)
    // setJoin(!join);
  };

  return (
    <div className="border border-gray-100 rounded-lg shadow-lg my-4">
      <div className="flex">
        <div className="w-1/4 relative">
          <Link to={`/grupo/${_id}`}>
            <div className="h-full">
              <ImageBg imagen={imagePlace} />
            </div>
          </Link>
        </div>
        <div className="w-3/4 p-5">
          <div className="flex justify-between items-start">
            <div>
              <Link to={`/grupo/${_id}`}>
                <p className="text-lg font-bold mb-1">{title}</p>
              </Link>
              <div className="flex items-center gap-x-3">
                <ImageProfileUserMedium imagen={imageUser} />
                <div>
                  <p className="text-sm font-bold">{name}</p>
                  <p className="text-sm">{date}</p>
                </div>
              </div>
              <div className="flex items-center gap-x-3">
                <CiLocationOn className="text-xl" />
                <p className="text-sm">{location}</p>
              </div>
            </div>
          </div>
          <p className="text-lg my-4">{description}</p>
          <div className="text-right">
            {isUserInGroup ? (
              <button
                className="bg-greenSecundary w-[10rem] h-[30px] text-white font-bold rounded-md"
                disabled
              >
                Eres miembro
              </button>
            ) : isRequestPending ? (
              <button
                className="bg-grayPrimary w-[10rem] h-[30px] text-white font-bold rounded-md cursor-pointer hover:bg-greenSecundary duration-75"
                disabled
              >
                Solicitud pendiente
              </button>
            ) : (
              <button
                onClick={handlerJoin}
                className={
                  "bg-greenPrimary w-[10rem] h-[30px] text-white font-bold rounded-md cursor-pointer hover:bg-greenSecundary duration-75"
                }
              >
                Unirse
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
  
}