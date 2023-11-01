import React, { useCallback, useEffect, useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { ImageBg, ImageProfileUserSmall } from "../../../components/Images/ImageProfileUser";
import Sidebar from "../../../components/Sidebar/Sidebar";
import ListCardFirends from "../../../components/ListCardFriends";
import { getGroupDetail } from "../../../Redux/Actions/GroupGet";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getUserDetail } from "../../../Redux/Actions/UserGet";

import { FaUsersLine } from 'react-icons/fa6';
import { IoMdArrowRoundBack } from "react-icons/io";

export function GrupoDetail() {
  const dispatch = useDispatch();
  const { GroupId } = useParams();
  const group = useSelector((state) => state.group.groupDetail);
  const userAdmin = useSelector((state) => state.user.userDetail);
  const [miembros, setMiembros] = useState(1);
  const [joined, setJoined] = useState(false); // Estado para controlar si el usuario se ha unido al grupo

  useEffect(() => {
    if (GroupId) {
      dispatch(getGroupDetail(GroupId));
    }
  }, [dispatch, GroupId]);

  useEffect(() => {
    if (group) {
      dispatch(getUserDetail(group.users_admin[0]));
      setMiembros(group.users_admin && group.users_common ? group.users_admin.length + group.users_common?.length : 1);
    }
  }, [dispatch, group]);
// if(group.users_admin && group.users_common)

  const handleJoinGroup = () => {
    // Aquí debes llamar a la acción o función para unirse al grupo
    // Por ejemplo, dispatch(joinGroup(GroupId)) o ejecutar la lógica adecuada
    // Asegúrate de gestionar el estado joined según el resultado de la acción.
    setJoined(true);
  };

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
        <div className="flex justify-end mt-4">
          <button
            onClick={handleJoinGroup}
            className="bg-greenPrimary text-white font-bold rounded-full py-2 px-4 hover:bg-greenSecundary duration-75"
          >
            Unirse al grupo
          </button>
        </div>
      )}
    </div>
  );
}