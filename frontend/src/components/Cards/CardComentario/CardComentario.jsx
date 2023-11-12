import { ImageProfileUserSmall } from "../../Images/ImageProfileUser";

export default function CardComentario({ imageUser, name, comment, date}) {
    return (
        <div className="flex gap-x-2">

            <div>
                <ImageProfileUserSmall imagen={imageUser}/>
            </div>


            <div>
                <div className="bg-greenPrimary rounded-lg text-white py-2 px-4">
                    <p className="text-base font-bold">{name}</p>
                    <p>{comment}</p>
                </div>
                <div className="flex gap-x-3 mt-1 text-sm">
                    <button>Me gusta</button>
                    <button>Responder</button>
                    <p>{date}</p>
                </div>
            </div>
        </div>
    )
}
