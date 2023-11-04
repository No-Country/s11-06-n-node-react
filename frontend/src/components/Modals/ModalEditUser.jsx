import Modal from 'react-modal'
Modal.setAppElement('#root');
import { BsCardImage } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { GrClose } from 'react-icons/gr';
import { ImageProfileUserLarge, ImageProfileUserMedium, ImageProfileUserSmall } from '../Images/ImageProfileUser';
import { CustomForm } from '../CustomForm';
import { LiaUserEditSolid } from 'react-icons/lia';
import { RiImageEditLine } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import { modifyTheUser } from '../../Redux/Actions/UserGet';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Swal from "sweetalert2";
import loader from '../../../public/loaderimg.gif'

export default function ModalEditUser({ user, token }) {

  const cloudinaryApiKey = import.meta.env.VITE_CLOUDINARY_API_KEY;
  const url = import.meta.env.VITE_API_URL;
  // const user = useSelector((state) => state.user.userDetail);
  const [loading, setLoading] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true)
  }
  const closeModal = () => {
    setModal(false)
  }
  // console.log("user en modal", user);
  const [editedUser, setEditedUser] = useState({

  });
  const [languagesList, setLanguagesList] = useState([]);

  useEffect(() => {
    setEditedUser(
      {
        id: user._id,
        name: user.name,
        email: user.email,
        lastname: user.lastname,
        location: user.location,
        birthdate: user.birthdate,
        phone: user.phone,
        languages: user.languages,
        avatar: user.avatar
      }
    )
  }, [user])

  useEffect(() => {
    axios.get('http://demo1063061.mockable.io/idiomas_banderas')
      .then((response) => {
        setLanguagesList(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener la lista de idiomas:', error);
      });
    // setuserImage(editedUser.avatar)
  }, []);
  // console.log("edituser",editedUser);


  const handleFieldChange = (field, value) => {
    setEditedUser({
      ...editedUser,
      [field]: value,
    });
  };
  // console.log(editedUser);

  const handleAvatarChange = async (e) => {
    e.preventDefault();
    let array
    // console.log("editedUser.avatar",editedUser.avatar);
    if (editedUser.avatar) {
      array = editedUser.avatar.split("/")
      console.log("array", array);
      const [publicID, etc] = array[array.length - 1].split(".")
      console.log(publicID)
      setLoadingImage(true)
      try {
        const delResponse = await axios.delete(
          `${url}/users/eliminar-imagen/${publicID}`
        );
        // console.log(delResponse);
        const file = e.target.files[0];
        console.log(file);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'GlobalMateApp');
        formData.append('api_key', cloudinaryApiKey);
        formData.append('public_id', publicID);

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

        setLoadingImage(false);
        setEditedUser((prevEditedUser) => ({
          ...prevEditedUser,
          avatar: uploadedUrl,
        }));

      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'GlobalMateApp');
      formData.append('api_key', cloudinaryApiKey);
      formData.append('public_id', editedUser.id);

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

      setLoadingImage(false);
      setEditedUser((prevEditedUser) => ({
        ...prevEditedUser,
        avatar: uploadedUrl,
      }));
    }
    
  };

  const handleSave = async () => {
    event.preventDefault();
    setLoading(true);
    const result = await dispatch(modifyTheUser(editedUser, token));
    // console.log(result);
    if (result.payload) {
      Swal.fire({
        icon: "success",
        title: "Edición Exitosa",
        text: `¡Usuario ${editedUser.email} editado correctamente!`,
      })
    }
    //   const newCookieData = { accesToken: token, user: editedUser }
    //   Cookies.set("userData", JSON.stringify(newCookieData));
    setLoading(false);

    closeModal();
  };

  const handleLanguageSelection = async (language) => {
    const selectedLanguage = await languagesList.find((lang) => lang.label === language);
    if (selectedLanguage) {
      if (!editedUser.languages.find((lang) => lang.value === selectedLanguage.value)) {
        setEditedUser((prevUser) => ({
          ...prevUser,
          languages: [...prevUser.languages, selectedLanguage],
        }));
      }
    }
  };
  const handleRemoveLanguage = (language) => {
    // Remueve el idioma del estado editedUser.
    setEditedUser((prevUser) => ({
      ...prevUser,
      languages: prevUser.languages.filter((lang) => lang !== language),
    }));
  };
  

  return (

    <div className="mt-10">
      <button onClick={openModal} className='w-16 h-16 p-2 bg-greenPrimary rounded-full text-white flex flex-col justify-center items-center border-solid shadow-2xl border-greenPrimary hover:bg-greenSecundary'>
        <span className='text-xl'> {<LiaUserEditSolid />}</span>
        <p className='text-xs'>Editar</p>
      </button>
      <Modal className={'overflow-y-scroll h-full'} isOpen={modal} onRequestClose={closeModal}>
        <div className='flex justify-center items-center h-full text-sm text-greenPrimary'>
          <div className='border border-graySecundary max-w-xs sm:max-w-xl w-full p-5 sm:p-14 shadow-2xl bg-white rounded-lg relative'>
            <div className="flex flex-col items-center">
              <div className='border-b border-greenPrimary flex justify-between w-full mb-2'>
                <p className='text-2xl py-2'>Editar datos</p>
                <button onClick={closeModal} className='absolute top-5 right-5 text-2xl text-greenSecundary'><GrClose /></button>
              </div>
              {/* <ImageProfileUserLarge  imagen={editedUser.avatar}></ImageProfileUserLarge> */}
              {loadingImage? <div className='w- full flex justify-center mt-8 mb-8'>
                <img src={loader} alt="Cargando imagen..." class="w-[50%] h-[50%] bg-transparent" />
              </div> :( <div className="relative mb-6">
                <label
                  htmlFor="avatarInput"
                  className="cursor-pointer absolute bottom-0 right-0 bg-greenPrimary text-white p-2 rounded-full hover:bg-greenSecundary"
                >
                  <RiImageEditLine className="text-xl" />
                </label>
                <ImageProfileUserLarge imagen={editedUser.avatar ? editedUser.avatar : "https://res.cloudinary.com/dbwmesg3e/image/upload/v1698886031/GlobalMate/pngegg_21_pm25ge.png"} />
                <input
                  type="file"
                  className="hidden"
                  id="avatarInput"
                  name="avatar"
                  accept="image/*"
                  onChange={handleAvatarChange}
                />
              </div>) }
             
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="text-gray-600 font-bold">Nombre:</label>
                <input
                  type="text"
                  id="name"
                  value={editedUser.name}
                  onChange={(e) => handleFieldChange('name', e.target.value)}
                  className="border w-full px-4 py-2 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="lastname" className="text-gray-600 font-bold">Apellido:</label>
                <input
                  type="text"
                  id="lastname"
                  value={editedUser.lastname}
                  onChange={(e) => handleFieldChange('lastname', e.target.value)}
                  className="border w-full px-4 py-2 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="location" className="text-gray-600 font-bold">Ubicación:</label>
                <input
                  type="text"
                  id="location"
                  value={editedUser.location}
                  onChange={(e) => handleFieldChange('location', e.target.value)}
                  className="border w-full px-4 py-2 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="birthdate" className="text-gray-600 font-bold">Fecha de Nacimiento:</label>
                <input
                  type="text"
                  id="birthdate"
                  value={editedUser.birthdate}
                  onChange={(e) => handleFieldChange('birthdate', e.target.value)}
                  className="border w-full px-4 py-2 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-gray-600 font-bold">Teléfono:</label>
                <input
                  type="text"
                  id="phone"
                  value={editedUser.phone}
                  onChange={(e) => handleFieldChange('phone', e.target.value)}
                  className="border w-full px-4 py-2 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="languages" className="text-gray-600 font-bold">Idiomas:</label>
                <select
                  id="languages"
                  onChange={(e) => handleLanguageSelection(e.target.value)} // Manejar cambios
                  className="border w-full px-4 py-2 rounded-md"
                >
                  <option value="" label=""></option>
                  {languagesList.map((language) => (
                    <option key={language.value} value={language.label}>
                      {language.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <p className='mt-4 mb-4'>Idiomas Seleccionados:</p>
              <ul className='flex'>
                {editedUser.languages && editedUser.languages.map((language) => (
                  <li className='flex items-center text-base mr-4'>
                    <div className='relative'>
                      <img src={language.flag} alt={language.label} className="w-16 h-16 object-cover" />
                      <button
                        onClick={() => handleRemoveLanguage(language)}
                        className="absolute right-0 bottom-0 p-2 bg-red text-white rounded-full hover:bg-red-600 transition duration-300 font-bold"
                      >
                        X
                      </button>
                    </div>

                  </li>
                ))}
              </ul>
            </div>
            <button onClick={handleSave} className="bg-greenPrimary w-full py-2 text-white font-bold rounded-md cursor-pointer hover:bg-greenSecundary duration-75 mt-4">
              Guardar Cambios
            </button>
          </div>
        </div>
      </Modal>
    </div>

  )
}
