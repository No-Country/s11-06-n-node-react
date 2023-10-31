import CardActiveUser from "../Cards/CardActiveUser/CardActiveUser";

import user1 from '../../../public/person1.png'
import user2 from '../../../public/person2.png'
import user3 from '../../../public/person3.png'
import user4 from '../../../public/person4.png'
import user5 from '../../../public/person5.png'
import user6 from '../../../public/person6.png'
import user7 from '../../../public/person7.png'
import Typography from "../Typography";

export default function SideUsers() {

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
            <div className="fixed bg-grayPrimary h-screen w-60 px-4 py-10 shadow-lg">
                <div className="mb-10">
                    <div className="border-b border-greenPrimary"><Typography.SubtitleContainer>Personas Activas</Typography.SubtitleContainer></div>
                    <Typography.Small>Cerca tuyo</Typography.Small>
                </div>
                <div className="flex flex-col gap-y-7">
                    {photoUsers.map(photoUser => (
                        <CardActiveUser
                            photoUser={photoUser.photo}
                            name={photoUser.name}
                            lang={photoUser.lang}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
