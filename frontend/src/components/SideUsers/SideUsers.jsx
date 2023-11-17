import CardActiveUser from "../Cards/CardActiveUser/CardActiveUser";
import Typography from "../Typography";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../Redux/Actions/UserGet";
import ModalUserActive from "../Modals/ModalUserActive";


export default function SideUsers() {

    const dispatch = useDispatch()
    const allUsers = useSelector((state) => state.user.users);
    const actualUser = useSelector((state) => state.user.userDetail);
    const [selectedUser, setSelectedUser] = useState({})
    const [modal, setModal] = useState(false)
    const openModal = () => {
        setModal(true)
    }
    const closeModal = () => {
        setModal(false)
    }

    useEffect(() => {
          dispatch(getAllUsers());
      }, []);

const connectedUsers = allUsers?.filter((user) => user.status !== 'desconectado' && user._id !== actualUser._id);

    

    return (
         <div className="w-60 text-white">
            <div className="fixed bg-grayPrimary h-screen overflow-y-scroll w-60 px-4 py-10 pb-[100px] shadow-lg ">
                <div className="mb-10">
                    <div className="border-b border-greenPrimary"><Typography.SubtitleContainer>Personas Activas</Typography.SubtitleContainer></div>
                    {/* <Typography.Small>Cerca tuyo</Typography.Small> */}
                </div>
                <div className="flex flex-col gap-y-7">
                    {connectedUsers?.map(usuario => (
                        <CardActiveUser
                            key={usuario._id}
                            usuario={usuario}
                            setSelectedUser={setSelectedUser}
                            openModal={openModal}
                        />
                    ))}
                </div>
            </div>

            <ModalUserActive selectedUser={selectedUser} openModal={openModal} closeModal={closeModal} modal={modal} />
        </div>
    )
}
