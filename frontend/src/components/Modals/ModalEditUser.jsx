import Modal from 'react-modal'
Modal.setAppElement('#root');
import { BsCardImage } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { GrClose } from 'react-icons/gr';
import { ImageProfileUserLarge, ImageProfileUserMedium, ImageProfileUserSmall } from '../Images/ImageProfileUser';
import image1 from '../../../public/user1.jpeg'
import ModalAdd from './ModalAdd';
import { CustomForm } from '../CustomForm';
import TextArea from '../Input/textarea';
import { LiaUserEditSolid } from 'react-icons/lia';
import { RiImageEditLine } from 'react-icons/ri';
import Avatar from '../Avatar';
import { useEffect, useState } from 'react';
import { modifyTheUser } from '../../Redux/Actions/UserGet';
import { useDispatch } from 'react-redux';
import axios from 'axios';

export default function ModalEditUser({user, token}) {

const cloudinaryApiKey = import.meta.env.VITE_CLOUDINARY_API_KEY;
// console.log(cloudinaryApiKey)
const [loading, setLoading] = useState(false);
const [loadingImage, setLoadingImage] = useState(false);
const dispatch = useDispatch();
// console.log(user, token);

    const [editedUser, setEditedUser] = useState({
        id: user._id,
        name: user.name,
        lastname: user.lastname,
        location: user.location,
        birthdate: user.birthdate,
        phone: user.phone,
        languages: user.languages,
        avatar: user.avatar
      });
      const [languagesList, setLanguagesList] = useState([]);

  useEffect(() => {
    axios.get('http://demo1063061.mockable.io/idiomas_banderas')
      .then((response) => {
        setLanguagesList(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener la lista de idiomas:', error);
      });
  }, []);
// console.log(languagesList);
// console.log(editedUser);
  const handleFieldChange = (field, value) => {
    setEditedUser({
      ...editedUser,
      [field]: value,
    });
  };
// console.log(editedUser);

  const handleAvatarChange = async (e) => {
    e.preventDefault();
    //Para eliminar la imagen anterior
    const array = userImage.split("/")
    const [publicID, etc] = array[array.length - 1].split(".")
    // console.log(publicID)
    setLoadingImage(true)
    //borrar la imagen anterior ------------------------------------------------
    // const del = await fetchFunctions.DELETE(
    //   `${Url}/users/eliminar-imagen/${publicID}`
    // );
    // console.log(cloudinaryApiKey);
    //-------------------------------------------------------------------------------
    const file = e.target.files[0]
    // console.log(file)
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'TellMeChat')
    formData.append('api_key', cloudinaryApiKey);
    formData.append('public_id', `${publicID}`);
    const res = await fetch('https://api.cloudinary.com/v1_1/GlobalMate/image/upload',
      {
        method: "POST",
        body: formData
      })
    // console.log('soy respuesta:',res);
    const cloudinaryData = await res.json();
    const uploadedUrl = cloudinaryData.secure_url
    // console.log('soy la url nueva',uploadedUrl)
    setLoadingImage(false)
    setEditedUser((prevEditedUser) => ({
      ...prevEditedUser,
      avatar: uploadedUrl,
    }));
  };

  const handleSave = async () => {
    event.preventDefault();
    console.log('user en submit', editedUser)
    setLoading(true);
    // console.log(token);
    const result = dispatch(modifyTheUser(editedUser, token));
    //   console.log(result);
    //   const newCookieData = { token: token, user: formToSend }
    //   Cookies.set("userData", JSON.stringify(newCookieData));
      setLoading(false);
    //   closeModal();
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
    const defaultValues = {
        description: '',
    }

    const onSubmit = async (data) => {
        console.log({ data });
    }

    return (
        <ModalAdd title="Editar"  icon={<LiaUserEditSolid />} >
            <ModalAdd.Header className="flex flex-col items-center">
            {/* <ImageProfileUserLarge  imagen={editedUser.avatar}></ImageProfileUserLarge> */}
                <div className="relative mb-6">
                    <label
                        htmlFor="avatarInput"
                        className="cursor-pointer absolute bottom-0 right-0 bg-greenPrimary text-white p-2 rounded-full hover:bg-greenSecundary"
                    >
                        <RiImageEditLine className="text-xl" />
                    </label>
                    <ImageProfileUserLarge imagen={editedUser.avatar} />
                    <input
                        type="file"
                        className="hidden"
                        id="avatarInput"
                        name="avatar"
                        accept="image/*"
                        onChange={handleAvatarChange}
                    />
                </div>
            </ModalAdd.Header>
            <ModalAdd.Body>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="text-gray-600">Nombre:</label>
            <input
              type="text"
              id="name"
              value={editedUser.name}
              onChange={(e) => handleFieldChange('name', e.target.value)}
              className="border w-full px-4 py-2 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="lastname" className="text-gray-600">Apellido:</label>
            <input
              type="text"
              id="lastname"
              value={editedUser.lastname}
              onChange={(e) => handleFieldChange('lastname', e.target.value)}
              className="border w-full px-4 py-2 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="location" className="text-gray-600">Ubicación:</label>
            <input
              type="text"
              id="location"
              value={editedUser.location}
              onChange={(e) => handleFieldChange('location', e.target.value)}
              className="border w-full px-4 py-2 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="birthdate" className="text-gray-600">Fecha de Nacimiento:</label>
            <input
              type="text"
              id="birthdate"
              value={editedUser.birthdate}
              onChange={(e) => handleFieldChange('birthdate', e.target.value)}
              className="border w-full px-4 py-2 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="phone" className="text-gray-600">Teléfono:</label>
            <input
              type="text"
              id="phone"
              value={editedUser.phone}
              onChange={(e) => handleFieldChange('phone', e.target.value)}
              className="border w-full px-4 py-2 rounded-md"
            />
          </div>
          <div>
                        <label htmlFor="languages" className="text-gray-600">Idiomas:</label>
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
  <p className='mt-4'>Idiomas Seleccionados:</p>
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
      </ModalAdd.Body>
        </ModalAdd>

    )
}
