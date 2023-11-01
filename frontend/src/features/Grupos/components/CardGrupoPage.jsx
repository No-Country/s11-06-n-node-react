import { CiLocationOn } from "react-icons/ci";
import { BiMessageRoundedDots } from "react-icons/bi";
import { MdRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  ImageBg,
  ImageProfileUserMedium,
} from "../../../components/Images/ImageProfileUser";
import { useState } from "react";

export default function CardGrupoPage({
  _id,
  name,
  location,
  imageUser,
  imagePlace,
  description,
  date,
  title
}) {
  const [join, setJoin] = useState(false);

  const handlerJoin = () => {
   console.log("boton unirse"); 
    setJoin(!join);
  };

  return (
    <div className="border border-gray-100 rounded-lg shadow-lg my-4">
      <div className="flex">
        <div className="w-1/4 relative"> {/* Agrega posición relativa para el contenedor */}
          <Link to={`/grupo/${_id}`}> {/* Enlace para la descripción */}
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
          <div className="text-right"> {/* Nuevo contenedor para alinear el botón a la derecha */}
            <button
              onClick={handlerJoin}
              className={
                !join
                  ? "bg-greenPrimary w-[10rem] h-[30px] text-white font-bold rounded-md cursor-pointer hover:bg-greenSecundary duration-75 "
                  : "bg-grayPrimary w-[10rem] h-[30px] text-white font-bold rounded-md cursor-pointer hover:bg-greenSecundary duration-75 "
              }
            >
              {!join ? "Unirse" : "Solicitud pendiente"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}