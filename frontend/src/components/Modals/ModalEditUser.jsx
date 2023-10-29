import Modal from 'react-modal'
Modal.setAppElement('#root');
import { BsCardImage } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { GrClose } from 'react-icons/gr';
import { ImageProfileUserSmall } from '../Images/ImageProfileUser';
import image1 from '../../../public/user1.jpeg'
import ModalAdd from './ModalAdd';
import { CustomForm } from '../CustomForm';
import TextArea from '../Input/textarea';
import { LiaUserEditSolid } from 'react-icons/lia';
import Avatar from '../Avatar';
import { useState } from 'react';

export default function ModalEditUser() {

    const [editedUser, setEditedUser] = useState({
        id: "",
        name: "",
        lastname: "",
        // email: "",
        location: "",
        birthdate: "",
        phone: "",
        languages: "",
        avatar: ""
      });

  const handleFieldChange = (field, value) => {
    setEditedUser({
      ...editedUser,
      [field]: value,
    });
  };

  const handleSave = () => {
    onSave(editedUser);
    onClose();
  };
    const defaultValues = {
        description: '',
    }

    const onSubmit = async (data) => {
        console.log({ data });
    }

    return (
        <ModalAdd title="Editar" icon={<LiaUserEditSolid />}>
            <ModalAdd.Header>
                {/* <Avatar/> */}
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
            <label htmlFor="avatar" className="text-gray-600">Avatar (URL):</label>
            <input
              type="text"
              id="avatar"
              value={editedUser.avatar}
              onChange={(e) => handleFieldChange('avatar', e.target.value)}
              className="border w-full px-4 py-2 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="languages" className="text-gray-600">Idiomas:</label>
            <input
              type="text"
              id="languages"
              value={editedUser.languages}
              onChange={(e) => handleFieldChange('languages', e.target.value)}
              className="border w-full px-4 py-2 rounded-md"
            />
          </div>
        </div>
        <button onClick={handleSave} className="bg-greenPrimary w-full py-2 text-white font-bold rounded-md cursor-pointer hover:bg-greenSecundary duration-75">
          Guardar Cambios
        </button>
      </ModalAdd.Body>
        </ModalAdd>

    )
}
