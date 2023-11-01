import { useParams } from "react-router-dom";
import userData from '../../../utils/data.json'
import place1 from '../../../../public/place1.jpeg'
import person1 from '../../../../public/person1.png'
import person5 from '../../../../public/person5.png'
import person2 from '../../../../public/person2.png'
import Typography from "../../../components/Typography";
import { ImageBg, ImageProfileUserLarge, ImageProfileUserMedium, ImageProfileUserSmall, ImageProfileUserSmall2 } from "../../../components/Images/ImageProfileUser";
import { AiTwotoneStar } from 'react-icons/ai';

export default function NoticiasPageID() {

    const usersData = userData.users
    const _id = useParams()
    
    const item = usersData.find(item => item._id === _id ? 'true' : 'false')
    if(!item){
        return <div>El item no existe</div>
    }
    console.log(item)
    return (
        <div className="flex flex-col gap-y-10 py-5">
            <div>
                <div className="border-b shadow-md">
                    <div className="h-40"><ImageBg imagen={place1}/></div>
                    <div className="flex gap-x-5 py-2 px-3 md:px-5">
                        <div><ImageProfileUserMedium imagen={person1}/></div>
                        <div className="w-full">
                            <Typography.SubtitleContainer>{item.name}</Typography.SubtitleContainer>
                            <div className="flex justify-between">
                                <p>Etiqueta</p>
                                <p>{item.noticias.date}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col gap-y-2 mt-8">
                    <div className="flex justify-between items-center">
                        <p className="w-full text-base font-bold">{item.noticias.title}</p>
                        <p className="flex gap-x-1 w-full justify-end"><span className="text-yellow-700 text-2xl"><AiTwotoneStar/></span>Nota más leida</p>
                    </div>
                    <p>{item.noticias.description}</p>
                </div>
            </div>





            {/* ------- Cards para crear componente luego */}
            <div className="max-w-3xl mx-auto">
                <div className="flex flex-col gap-y-5">
                    <div className="flex items-center">
                        <div className="z-10">
                            <ImageProfileUserSmall imagen={person5}/>
                        </div>
                        <div className="bg-grayPrimary -ml-5 py-2 pl-7 pr-4 rounded-xl">
                            <div className="flex justify-between items-center mb-1">
                                <p className="font-bold">Elvis Segovia</p>
                                <p className="text-sm">{item.noticias.date}</p>
                            </div>
                            <p>{item.name} es una buena anfitriona fds fsd</p>
                        </div>
                    </div>
    
                    <div className="flex items-center">
                        <div className="z-10">
                            <ImageProfileUserSmall imagen={person2}/>
                        </div>
                        <div className="bg-grayPrimary -ml-5 py-2 pl-7 pr-4 rounded-xl">
                            <div className="flex justify-between items-center mb-1">
                                <p className="font-bold">Gustavo Torres</p>
                                <p className="text-sm">{item.noticias.date}</p>
                            </div>
                            <p>{item.name} es una buena anfitriona</p>
                        </div>
                    </div>
                    <div>
                        <textarea name="" id="" cols="80" rows="4" className="border border-gray-500 w-full rounded-lg"></textarea>
                        <button className="bg-greenPrimary text-white w-full py-2 rounded-lg">Comentar</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
