import { ImageProfileUserSmall } from "../../Images/ImageProfileUser";


export default function CardActiveUser({photoUser, name, lang}) {
    return (
        <div className="flex items-center">
            <div className="relative">
                {photoUser?
                <ImageProfileUserSmall imagen={photoUser}/>:<ImageProfileUserSmall imagen='https://res.cloudinary.com/dbwmesg3e/image/upload/v1698886031/GlobalMate/pngegg_21_pm25ge.png'/>
                }
                
            </div>
            <div className="bg-greenPrimary w-full rounded-lg p-2 -ml-8 pl-10">
                <p className="text-sm mb-1">{name}</p>
                <div className="flex flex-row">
                <div className="text-xs">Habla: 
                <div className="flex flex-row">
                   {lang?.map((image)=>
                <img src={image.flag} alt="idioma" className="w-[15%] mr-1"/> )
                } 
                </div>
                </div>
                </div>
                
            </div>
        </div>
    )
}
