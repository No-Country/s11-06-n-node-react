import CardActiveUser from "../Cards/CardActiveUser/CardActiveUser";

import user1 from '../../../public/person1.png'
import user2 from '../../../public/person2.png'
import user3 from '../../../public/person3.png'
import user4 from '../../../public/person4.png'
import user5 from '../../../public/person5.png'
import user6 from '../../../public/person6.png'
import user7 from '../../../public/person7.png'
import Typography from "../Typography";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUsers } from "../../Redux/Actions/UserGet";


export default function SideUsers() {

    const dispatch = useDispatch()
    const allUsers = useSelector((state) => state.user.users);
    const actualUser = useSelector((state) => state.user.userDetail);
    // console.log(actualUser);
    useEffect(() => {
          dispatch(getAllUsers());
      }, []);
// console.log("sideUsers",allUsers);

const connectedUsers = allUsers?.filter((user) => user.status !== 'desconectado' && user._id !== actualUser._id);
const disconnectedUsers = allUsers?.filter((user) => user.status === 'desconectado');

console.log("conectados",connectedUsers);
console.log("desconectados",disconnectedUsers);

    const photoUsers = [
        {
            photo: user1,
            name: 'Estefanía Menendez',
            lang: 'Esp'
        },
        {
            photo: user2,
            name: 'Gustavo Torres',
            lang: 'Esp'
        },
        {
            photo: user3,
            name: 'Carolina Ramirez',
            lang: 'Esp, Por'
        },
        {
            photo: user4,
            name: 'Henry Ramirez',
            lang: 'Esp'
        },
        {
            photo: user5,
            name: 'Elvis Segovia',
            lang: 'Esp'
        },
        {
            photo: user6,
            name: 'Kevin Tea',
            lang: 'Esp'
        },
        {
            photo: user7,
            name: 'Alexander Briones',
            lang: 'Esp'
        }
    ]

    return (
         <div className="w-60 text-white">
            <div className="fixed bg-grayPrimary h-screen overflow-y-scroll w-60 px-4 py-10 pb-[100px] shadow-lg">
                <div className="mb-10">
                    <div className="border-b border-greenPrimary"><Typography.SubtitleContainer>Personas Activas</Typography.SubtitleContainer></div>
                    {/* <Typography.Small>Cerca tuyo</Typography.Small> */}
                </div>
                <div className="flex flex-col gap-y-7">
                    {connectedUsers?.map(photoUser => (
                        <CardActiveUser
                            photoUser={photoUser.avatar}
                            name={photoUser.name}
                            lang={photoUser.languages}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
