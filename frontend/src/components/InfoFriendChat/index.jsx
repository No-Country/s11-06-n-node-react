import { MapPinIcon } from "@heroicons/react/24/solid";
import { ImageProfileUserLarge } from "../Images/ImageProfileUser";

function InfoFriend({ user }) {
  return (
    <div className="w-fullflex justify-center">
      <div className="w-full h-60 flex justify-around items-center">
        <div className="flex ml-7 items-center">
          <div className="w-36 h-36 mr-4 flex  ">
            <figure>
              <span>
                <div className="relative">
                  {user?.avatar ? (
                    <ImageProfileUserLarge imagen={user.avatar} />
                  ) : (
                    <ImageProfileUserLarge imagen="https://res.cloudinary.com/dbwmesg3e/image/upload/v1698886031/GlobalMate/pngegg_21_pm25ge.png" />
                  )}
                </div>
              </span>
            </figure>
          </div>
          <div className="mx-3">
            <p className="font-bold text-2xl">
              {user?.name} {user?.lastname}
            </p>
            <div className="idiomas flex  items-center mt-1">
              <p className="text-2xl mx-2">Habla:</p>
              <div className="flex flex-row">
                {user?.languages?.map((image, index) => (
                  <img
                    src={image.flag}
                    key={index}
                    alt="idioma"
                    className="w-[15%] mr-1"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className=" mr-10">
          <div className="flex mx-5 h-full items-center">
            <MapPinIcon className="w-7 h-7 ml-5" />
            <p className="text-black text-xl mx-1">{user?.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoFriend;
