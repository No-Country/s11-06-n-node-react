import { ImageProfileUserSmall } from "../../Images/ImageProfileUser";


export default function CardActiveUser({photoUser, name, lang}) {
    return (
        <div className="flex items-center">
            <div className="relative">
                <ImageProfileUserSmall imagen={photoUser}/>
                <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 bottom-0"></span>
            </div>
            <div className="bg-greenPrimary w-full rounded-lg p-2 -ml-8 pl-10">
                <p className="text-sm mb-1">{name}</p>
                <p className="text-xs">Habla: {lang}</p>
            </div>
        </div>
    )
}
