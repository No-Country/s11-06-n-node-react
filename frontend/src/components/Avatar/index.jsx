import { ImageProfileUserSmall } from "../Images/ImageProfileUser"
import image1 from '../../../public/user1.jpeg'
import { CiLocationOn } from "react-icons/ci"
import { useSelector } from "react-redux";

function Avatar(image) {

    const userActive = useSelector((state) => state.user.userDetail);

    return (
        <div className='flex gap-x-3 items-center my-5'>
            <div>
                <ImageProfileUserSmall imagen={userActive.avatar} />
            </div>
            <div>
                <p className='font-bold mb-1'>{userActive.name}</p>
                <p className="border border-gray-500 px-2 py-1 rounded-2xl flex items-center w-fit text-xs"><p className='mr-1 text-base -ml-1'><CiLocationOn /></p>{userActive.location}</p>
            </div>
        </div>
    )
}

export default Avatar