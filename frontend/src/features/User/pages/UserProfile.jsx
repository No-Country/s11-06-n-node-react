
import React, { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { getUserDetail } from "../../../Redux/Actions/UserGet";
import { useDispatch, useSelector } from "react-redux";

const UserProfile = () => {
    //action getTheUser para traer todos los datos del usuario
    //const dispatch = useDispatch();
    //const userDetail = useSelector((state) => state.userDetail);
    //const userId = 'Usuario logueado'; ver como lo va a recibir, o sea conectar. 

    //useEffect(() => {
      // acción para obtener los detalles del usuario
    //  getUserDetail(userId);
    //}, [userId]);


  return (
    <div className="w-3/6 mx-auto mt-8 border border-gray-300 rounded-lg p-4 relative">
      <button className="text-gray-600 flex items-center absolute top-0 right-0 mt-4 mr-4">
        Modificar Datos
        <FiEdit className="ml-2" />
        {/* LINK A LA RUTA PARA MODIFICAR EL PERFIL */}
      </button>

      <div className="flex justify-center mt-4">
        <div className="w-1/3 text-center">
          <img
                src="URL_DE_LA_IMAGEN"
            //src= {userDetail.avatar}
            alt=""
            className="rounded-full w-48 h-48 border border-gray-300 mx-auto"
          />
        </div>
        <div className="w-2/3 pl-4">
        {/* <p className="text-2xl font-bold">{userDetail.name} {userDetail.lastname}</p>
          <p className="text-gray-600">{userDetail.email}</p>
          <p className="text-gray-600">{userDetail.phone}</p>
          <p className="text-gray-600">Fecha de Nacimiento: {userDetail.birthdate}</p>
          <p className="text-gray-600">País: {userDetail.location}</p>
          <p className="text-gray-600">Idiomas: {userDetail.languages.join(', ')}</p> */}
               <p className="text-2xl font-bold">Lorena Love</p>
          <p className="text-gray-600">lorena@mail.com</p>
          <p className="text-gray-600">+549 11 6565 6565</p>
          <p className="text-gray-600">Fecha de Nacimiento: 29/09/1990</p>
          <p className="text-gray-600">País: Argentina</p>
          <p className="text-gray-600">Idioma: Español</p>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex">
          <div className="w-1/3 pr-3">
            <div className="border p-4">
              <h3 className="text-xl font-bold">Eventos Creados</h3>
              {/* muestra eventos creados */}
            </div>
          </div>
          <div className="w-1/3 pl-3">
            <div className="border p-4">
              <h3 className="text-xl font-bold">Historial de Reservas</h3>
              {/* muestra historial de reservas */}
            </div>
          </div>
        </div>
      </div>


      <div className="mt-4">
        <div className="flex">
          <div className="w-1/3 pr-3">
            <div className="border p-4">
              <h3 className="text-xl font-bold">Historial Posteos</h3>
              {/* muestra de historial de posteos */}
            </div>
          </div>
          <div className="w-1/3 pl-3">
            <div className="border p-4">
              <h3 className="text-xl font-bold">Grupos que eres parte</h3>
              {/* muestra grupos a los que se unió */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
