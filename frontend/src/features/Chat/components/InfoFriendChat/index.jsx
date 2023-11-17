import { MapPinIcon } from "@heroicons/react/24/solid";
import { ImageProfileUserLarge } from "../../../../components/Images/ImageProfileUser";

function InfoFriendChat({ user }) {
  return (
    <div className="w-full flex justify-between  items-center">
      <div className="flex items-center w-3/4">
        <div className="w-36 h-36 mr-4">
          {user?.avatar ? (
            <ImageProfileUserLarge imagen={user.avatar} />
          ) : (
            <ImageProfileUserLarge imagen="https://res.cloudinary.com/dbwmesg3e/image/upload/v1698886031/GlobalMate/pngegg_21_pm25ge.png" />
          )}
        </div>
        <div className="mx-5">
          <p className="font-bold text-2xl">
            {user?.name} {user?.lastname}
          </p>
          <div className="idiomas flex  items-center mt-1">
            <p className="text-2xl">Habla:</p>
            <div className="flex flex-row">
              {user?.languages?.map((image, index) => (
                <img
                  src={image.flag}
                  key={index}
                  alt="idioma"
                  className="w-[5%] mr-1"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/4 ">
        <div className="flex h-full items-center">
          <MapPinIcon className="w-7 h-7" />
          <span className="text-black text-xl mx-1">{user?.location}</span>
        </div>
      </div>
    </div>
  );
}

export default InfoFriendChat;
