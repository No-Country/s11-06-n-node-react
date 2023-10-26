import { HiOutlineUserGroup } from "react-icons/hi";
import { CustomForm } from "../CustomForm";
import Input from "../Input";
import ModalAdd from "./ModalAdd"
import { ImageProfileUserLarge } from "../Images/ImageProfileUser";
import place1 from '../../../public/place1.jpeg'

export default function ModalAddGroup() {

    const defaultValues = {
        name: '',
        description: '',
        rules: '',
    }

    const onSubmit = async (data) => {
        console.log({ data });
    }

    return (
        <ModalAdd title="Crear grupo" icon={<HiOutlineUserGroup />}>

            <ModalAdd.Header>
                <div className='flex justify-center py-8'>
                    <ImageProfileUserLarge imagen={place1} />
                </div>
            </ModalAdd.Header>

            <ModalAdd.Body>
                <CustomForm
                    defaultValues={defaultValues}
                    onSubmit={onSubmit}
                    className='flex flex-col gap-y-5'
                >

                    <div className='flex flex-col py-5 gap-y-3'>
                        <div className='flex flex-col gap-y-2'>
                            <label htmlFor="">Nombre del grupo</label>
                            <Input name="name" type="text" placeholder='Dale un nombre a tu grupo' className='border border-gray-400 p-2 rounded-md' />
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <label htmlFor="">Descripción</label>
                            <Input name="description" type="text" placeholder='Describe tu grupo' className='border border-gray-400 p-2 rounded-md' />
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <label htmlFor="">Establecer reglas del grupo</label>
                            <Input name="rules" type="text" placeholder='Selecciona' className='border border-gray-400 p-2 rounded-md' />
                        </div>
                    </div>
                    <input type="submit" value="Crear" className='bg-greenPrimary w-full py-2 text-white font-bold rounded-md cursor-pointer hover:bg-greenSecundary duration-75' />

                </CustomForm>
            </ModalAdd.Body>

        </ModalAdd>
    )
}
