import { HiOutlineUserGroup } from "react-icons/hi";
import { CustomForm } from "../CustomForm";
import Input from "../Input";
import ModalAdd from "./ModalAdd";
import { ImageProfileUserLarge } from "../Images/ImageProfileUser";
import axios from "axios";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { groupPost } from "../../Redux/Actions/GroupGet";
import { useState } from "react";
import { RiImageEditLine } from "react-icons/ri";
const place1 = '/place1.jpeg'
export default function ModalAddGroup() {
  const user = useSelector((state) => state.user.userDetail);
  const cloudinaryApiKey = import.meta.env.VITE_CLOUDINARY_API_KEY;
  const [imagen, setImagen] = useState(place1)
  const handleAvatarChange = async (e) => {
    e.preventDefault();
      // Subir la nueva imagen
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'GlobalMateApp');
      formData.append('api_key', cloudinaryApiKey);
  
      const uploadResponse = await axios.post(
        'https://api.cloudinary.com/v1_1/GlobalMate/image/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
  
      const cloudinaryData = uploadResponse.data;
      const uploadedUrl = cloudinaryData.secure_url;
        console.log(uploadedUrl)
      setImagen(uploadedUrl)
  };
  const defaultValues = {
    name: "",
    description: "",
    rules: "",
  };
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    let newData = { name: data.name, image: imagen, idUser: user._id };
    console.log(imagen)
    dispatch(groupPost(newData));
    Swal.fire({
      icon: "success",
      title: "Creación Exitosa",
      text: `¡Grupo ${newData.name} creado correctamente!`,
    }); 
  };

  return (
    <ModalAdd title="Crear grupo" icon={<HiOutlineUserGroup />}>
      <ModalAdd.Header>
        <div className="flex justify-center py-8">
           <div className="relative mb-6">
              <label
                htmlFor="avatarInput"
                className="cursor-pointer absolute bottom-0 right-0 bg-greenPrimary text-white p-2 rounded-full hover:bg-greenSecundary"
              >
                <RiImageEditLine className="text-xl" />
              </label>
              <ImageProfileUserLarge imagen={imagen} />
              <input
                type="file"
                className="hidden"
                id="avatarInput"
                name="avatar"
                accept="image/*"
                onChange={handleAvatarChange}
              />
            </div>
        </div>
      </ModalAdd.Header>

      <ModalAdd.Body>
        <CustomForm
          defaultValues={defaultValues}
          onSubmit={onSubmit}
          className="flex flex-col gap-y-5"
        >
          <div className="flex flex-col py-5 gap-y-3">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="">Nombre del grupo</label>
              <Input
                name="name"
                type="text"
                placeholder="Dale un nombre a tu grupo"
                className="border border-gray-400 p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="">Descripción</label>
              <Input
                name="description"
                type="text"
                placeholder="Describe tu grupo"
                className="border border-gray-400 p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="">Establecer reglas del grupo</label>
              <Input
                name="rules"
                type="text"
                placeholder="Selecciona"
                className="border border-gray-400 p-2 rounded-md"
              />
            </div>
          </div>
          <input
            type="submit"
            value="Crear"
            className="bg-greenPrimary w-full py-2 text-white font-bold rounded-md cursor-pointer hover:bg-greenSecundary duration-75"
          />
        </CustomForm>
      </ModalAdd.Body>
    </ModalAdd>
  );
}
