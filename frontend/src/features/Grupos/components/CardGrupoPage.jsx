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
}) {
  const [join, setJoin] = useState(false);

  const handlerJoin = () => {
    setJoin(!join);
  };

  return (
    <div className="border border-gray-100 rounded-lg shadow-lg my-4">
      {/* ----- Portada */}
      <div className="h-28 md:h-40">
        <ImageBg imagen={imagePlace} />
        {/* <div className='text-xl'>
                    <div className='bg-gray-200 p-2 rounded-full'><BsShare/></div>
                    <div className='bg-gray-200 p-2 rounded-full'><MdFavoriteBorder/></div>
                </div> */}
      </div>

      {/* ----- Info */}
      <div className="px-5 py-5 flex flex-col mx-auto">
        <div className="mb-8 px-4">
          <div className="flex justify-between items-center gap-x-5 mb-10">
            <div>
              <p className="text-center text-xl">{description}</p>
              <div className="flex items-center justify-start gap-x-3">
                <p className="border border-gray-500 px-2 py-1 rounded-2xl flex items-center text-sm">
                  <p className="mr-1 text-xl -ml-1">
                    <CiLocationOn />
                  </p>
                  {location}
                </p>
              </div>
            </div>
            <div className="flex  gap-y-2">
              <p className="text-xl font-bold text-end">{name}</p>
              <div>
                <ImageProfileUserMedium imagen={imageUser} />
              </div>
            </div>
          </div>
         
        </div>
        <div className="flex justify-between items-center">
        <button
          onClick={handlerJoin}
            className={
              !join
                ? "bg-greenPrimary h-[30px] w-[15rem]  text-white font-bold rounded-md cursor-pointer hover:bg-greenSecundary duration-75 "
                : "bg-grayPrimary w-[15rem] h-[30px] text-white font-bold rounded-md cursor-pointer hover:bg-greenSecundary duration-75 "
            }
          >{!join ? "Unirse" : "Solicitud pendiente"}</button>
        </div>
      </div>
    </div>
  );
}
