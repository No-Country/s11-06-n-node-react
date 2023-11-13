import { ImageProfileUserSmall } from "../../Images/ImageProfileUser";

export default function CardActiveUser({ usuario, setSelectedUser, openModal }) {

    const handleSelectedUser = () => {
        setSelectedUser(usuario)
        openModal()
    }

  return (
    <div className="flex items-center cursor-pointer" onClick={handleSelectedUser} >
      <div className="relative">
        {usuario.avatar ? (
          <ImageProfileUserSmall imagen={usuario.avatar} />
        ) : (
          <ImageProfileUserSmall imagen="https://res.cloudinary.com/dbwmesg3e/image/upload/v1698886031/GlobalMate/pngegg_21_pm25ge.png" />
        )}
      </div>
      <div className="bg-greenPrimary w-full rounded-lg p-2 -ml-8 pl-10">
        <p className="text-sm mb-1">{usuario.name}</p>
        <div className="flex flex-row">
          <div className="text-xs">
            Habla:
            <div className="flex flex-row">
              {usuario.languages?.map((image, index) => (
                <img src={image.flag} key={index} alt="idioma" className="w-[15%] mr-1" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
