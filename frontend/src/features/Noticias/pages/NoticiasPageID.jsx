import BtnViewComments from "../../../components/Buttons/BtnViewComments";
import { ImageBg, ImageProfileUserMedium } from "../../../components/Images/ImageProfileUser";

export default function NoticiasPageID() {
    return (
        <div>
            {/* ----- Portada */}
            <div className="h-28 md:h-40">
                {/* <ImageBg imagen={imagePlace}/> */}
            </div>



            {/* ----- Info */}
            <div className="px-7 py-5 flex flex-col max-w-4xl mx-auto">
                <div className='mb-8'>
                    <div className="flex justify-between items-center gap-x-5 mb-10">
                        <div>
                            {/* <ImageProfileUserMedium imagen={imageUser}/> */}
                        </div>
                        <div className='flex flex-col w-full gap-y-2'>
                            {/* <p className="text-xl font-bold text-end">{name}</p> */}
                            <div className='flex items-center justify-end gap-x-3'>
                                {/* <p className="">{date}</p> */}
                                {/* <p className="border border-gray-500 px-2 py-1 rounded-2xl flex items-center text-sm"><p className='mr-1 text-xl -ml-1'><CiLocationOn/></p>{location}</p> */}
                            </div>
                        </div>
                    </div>
                    {/* <p>{description}</p> */}
                </div>


                <div className="flex justify-between items-center">
                    <BtnViewComments/>
                </div>
            </div>
        </div>
    )
}
