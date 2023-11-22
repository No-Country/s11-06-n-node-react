// import { useMaterialTailwind } from "@material-tailwind/react";
import React, { useCallback, useEffect, useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { GrUserSettings } from "react-icons/gr";
import { RiUserReceivedLine } from "react-icons/ri";
import { PiUserCircleGearDuotone, PiUserCirclePlusDuotone } from "react-icons/pi";
import { ImageBg, ImageProfileUserSmall } from "../../../components/Images/ImageProfileUser";
import Sidebar from "../../../components/Sidebar/Sidebar";
import ListCardFirends from "../../../components/ListCardFriends";
import { acceptUserPending, getGroupDetail, leaveGroup } from "../../../Redux/Actions/GroupGet";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getUserDetail } from "../../../Redux/Actions/UserGet";
import { FaCheck, FaUsersLine } from 'react-icons/fa6';
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { MdClose, MdExitToApp } from "react-icons/md";
import axios from "axios";
import { getAuth } from "../../../utils/checkAuth";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

export function GrupoDetail() {
  // const { apply } = useMaterialTailwind();
  const dispatch = useDispatch();
  const { GroupId } = useParams();
  const group = useSelector((state) => state.group.groupDetail);
  const userActual = useSelector((state) => state.user.userDetail);
  const [userAdmin, setuserAdmin] = useState();
  const [miembros, setMiembros] = useState(1);
  const [joined, setJoined] = useState(false); // Estado para controlar si el usuario se ha unido al grupo
  const [MatePendiente, setMatePendiente] = useState(false);
  const [Mates, setMates] = useState(false);
  const navigate = useNavigate();
  const [isAdmin, setisAdmin] = useState(false);

  console.log("group",group)
  const config = getAuth()
  useEffect(() => {
    const fetchData = async () => {
      if (group ) {
        // console.log(group.users_admin[0]);
        const Admin = await axios.get(`https://s11-06-n-node-react-back.onrender.com/users/${group.users_admin[0]._id}`,config);
        // console.log("admin en el llamado",Admin);
        setuserAdmin(Admin.data);
const isAdmin = group.users_admin && group.users_admin.some(admin => admin._id === userActual._id);
if(isAdmin){setisAdmin(true)}
      }
    };
    fetchData();
  }, [group]);
  
// console.log("userAdmin", userAdmin);
// console.log("userActual", userActual);
  useEffect(() => {
    if (GroupId) {
      dispatch(getGroupDetail(GroupId));
    }
  }, [dispatch, GroupId]);

  useEffect(() => {
    if (Object.keys(group).length>0) {
      // dispatch(getUserDetail(group.users_admin[0])); Arroja error _idUser
      setMiembros(group.users_admin && group.users_common ? group.users_admin.length + group.users_common?.length : 1);

    }
  }, [dispatch, group]);
  // console.log(group);
// if(group.users_admin && group.users_common)

const leavingGroup = () => {
  // Muestra una alerta con SweetAlert
  Swal.fire({
    title: '¿Estás seguro?',
    text: 'Estás a punto de abandonar el grupo.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Sí, abandonar grupo',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      dispatch(leaveGroup(group._id, userActual._id));
      navigate("/grupos");
    }else {
      Swal.fire({
        title: 'Cancelado',
        text: 'No has abandonado el grupo.',
        icon: 'info',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false
      });
    }
  });
}
const MatePendienteOpen = async () => {
setMatePendiente(!MatePendiente)
}

const MatesOpen = async () => {
  setMates(!Mates)
  }

const aceptarUsuarioPendiente = async (userId) => {
  console.log(group._id, userId);
dispatch(acceptUserPending(group._id, userId))
// dispatch(getGroupDetail(group._id));
}
const rechazarUsuarioPendiente = async (userId) => {
  dispatch(leaveGroup(group._id, userId));
}

const quitarUsuarioDelGrupo = async (userId) => {
  Swal.fire({
    title: '¿Estás seguro?',
    text: 'Estás a punto de eliminar un usuario.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      dispatch(leaveGroup(group._id, userId));
      // dispatch(getGroupDetail(group._id));
      // navigate("/grupos");
    }else {
      Swal.fire({
        title: 'Cancelado',
        text: 'No has eliminado al usuario.',
        icon: 'info',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false
      });
    }
  });
}

  return (
    <div className="border border-gray-100 rounded-lg shadow-lg my-4 p-4">
     <div className="flex justify-end items-center ">
      <Link to="/grupos"> {/* Enlace de vuelta */}
          <div className="flex items-center  text-gray-500 hover:text-gray-700">
            <IoMdArrowRoundBack /> Volver {/* Flecha y texto de vuelta */}
          </div>
        </Link>
      </div> 
      <h2 className="text-2xl font-bold mb-4">
        {group.name ? group.name : "Nombre del grupo no disponible"}
      </h2>

     
      <div className="h-40">
        <ImageBg imagen={group.image} />
      </div>

     
      <p className="my-4">
        {group.description
          ? group.description
          : "Descripción del grupo no disponible"}
      </p>

      <div className="flex items-center gap-2">
        <FaUsersLine className="text-3xl" /> 
        <p className="text-xl">Mates en el grupo: {miembros}</p>
      </div>

    
      <div>
        <h3 className="font-bold mt-4">Reglas del grupo:</h3>
        {group.rules ? (
          <div>Reglas: {group.rules}</div>
        ) : (
          <div>Reglas no disponibles</div>
        )}
      </div>
      <p>
        {group.status
          ? `Estado del grupo: ${group.status}`
          : "Estado del grupo no disponible"}
      </p>

      {userAdmin ? (
        <div className="flex items-center gap-2 mt-4">
          <p className="font-bold">Administrador:</p>
          <p>{userAdmin.name}</p>
          <ImageProfileUserSmall imagen={userAdmin.avatar} />
        </div>
      ) : (
        <div>Información del administrador no disponible</div>
      )}

      {userAdmin ? (
        <div className="flex items-center gap-2 mt-4">
          <p className="font-bold">Ubicación:</p>
          <p>{userAdmin.location}</p>
        </div>
      ) : (
        <div>Ubicación del administrador no disponible</div>
      )}

      {!joined && (
        <div className="flex justify-end mt-2">
        <button
      onClick={leavingGroup}
      className="relative text-red-900 hover:text-white  hover:bg-[#a52929]  focus:outline-none  flex items-center justify-around flex-row font-medium w-[9rem] h-[2rem] font-bold rounded-xl overflow-hidden group transition-all duration-300 relative"
      title="Abandonar grupo"
    >
      <MdExitToApp className="font-medium" />
      <span className="mr-2">salir del grupo</span>
      <div className="absolute inset-0 bg-gradient-to-t  via-transparent to-transparent opacity-0 group-hover:opacity-100 transform skew-y-10"></div>
    </button>
        </div>
      )}



{isAdmin && (
        <Tabs>
          <TabsHeader >
            <Tab onClick={MatesOpen} className="hover:font-bold">
            <div  className="flex flex-row items-center">Mates del grupo <GrUserSettings className="h-[100%] ml-4"/></div>
             </Tab>
          </TabsHeader>
          <TabsBody>
              {/* Panel de Usuarios Comunes */}
            <TabPanel>
  {Mates && group.users_common.length? group.users_common.map((user) => (
    <div key={user._id} className="flex items-center justify-between p-4 border-b border-gray-300">
      <div className="flex items-center">
        <img src={user.avatar} alt={`Avatar de ${user.name}`} className="rounded-full w-10 h-10 mr-4" />
        <div>
          <p className="font-bold">{user.name} {user.lastname}</p>
          <p className="text-gray-500">{user.email}</p>
        </div>
      </div>
      {/* Botón para quitar al usuario del grupo */}
      <button className="text-red-500 hover:text-white hover:bg-red-500 px-3 py-1 rounded" title="Expulsar" onClick={() => quitarUsuarioDelGrupo(user._id)}>
        <MdClose />
      </button>
    </div>
  )):
  <div></div>
  }
</TabPanel>
<TabsHeader>
   <Tab onClick={MatePendienteOpen} className="hover:font-bold">
    <div className="flex flex-row items-center">{group.users_pending.length? `Hay ${group.users_pending.length} mates pendientes`: "No hay mates pendientes"} <RiUserReceivedLine className="h-[100%] ml-4"/> </div>
   
    
    </Tab>
          </TabsHeader>
            {/* Panel de Usuarios Pendientes */}
             
              <TabPanel>
  {MatePendiente && group.users_pending.length? group.users_pending.map((user) => (
    <div key={user._id} className="flex justify-between items-center p-4 border-b border-gray-300">
      <div className="flex items-center">
        <img src={user.avatar} alt={`Avatar de ${user.name}`} className="rounded-full w-10 h-10 mr-4" />
        <div>
          <p className="font-bold">{user.name} {user.lastname}</p>
          <p>{user.email}</p>
          {/* <p>{user._id}</p> */}
        </div>
      </div>
      <div className="flex items-center space-x-4">
        {/* Botones con iconos para aceptar o rechazar la solicitud */}
        <button className="text-green-500" onClick={() => aceptarUsuarioPendiente(user._id)}>
          <FaCheck title="Aceptar" />
        </button>
        <button className="text-red-500" title="Rechazar" onClick={() => rechazarUsuarioPendiente(user._id)}>
          <FaTimes />
        </button>
        {/* Agregar un icono para quitar al usuario del grupo */}
        
      </div>
    </div>
  )):
  <div></div>
  }
</TabPanel>
            
          </TabsBody>
        </Tabs>
      )}

    </div>
  );
}