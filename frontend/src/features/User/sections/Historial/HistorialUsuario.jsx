import { IoIosArrowForward } from 'react-icons/io';


export default function HistorialUsuario({userEvents, formatDate, userGroups, userNews}) {
    console.log(userNews);
    return (
        <div>
        <div className="mt-8">
            <div className="flex">
                <div className="w-2/3 pr-3">
                    <div className="border p-4">
                        <h3 className="text-xl font-semibold">Eventos Creados</h3>
                        <hr className="mb-2" />
                        {userEvents?.length > 0 ? (
                            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                                {userEvents.slice(0, 2).map((event) => (
                                    <li key={event.id} className="border rounded p-2 flex flex-col justify-end items-center">
                                        <div className="w-300 h-auto mr-300">
                                            <img
                                                src={event.image}
                                                alt={`${event.name} logo`}
                                                className="w-full h-full "
                                            />
                                        </div>
                                        <p className="font-semibold">{event.name}</p>
                                        <p className="text-sm">{event.location}</p>
                                        <p className="text-sm">{formatDate(event.date)}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>Aún no has creado ningún evento.</p>
                        )}
                        <div className="w-full flex flex-row justify-end items-center">
                            <button
                                className="bg-greenPrimary text-white py-2 px-4 rounded-full  cursor-pointer hover:bg-greenSecundary duration-75 mt-4"
                                onClick={() => history.push("/todos-los-eventos")}
                            >
                                <IoIosArrowForward></IoIosArrowForward>
                            </button>
                        </div>

                    </div>
                    {/* <UserEvents userEvents={userEvents} /> Crear componente */}
                </div>
                <div className="w-1/3 pl-3">
                    <div className="border p-4">
                {
                    userNews.length?(
                <div>
                        <h3 className="text-xl font-semibold">Posteos</h3>
                        <hr className="mb-2" />
                        {userEvents?.length > 0 ? (
                            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                                {userEvents.slice(0, 2).map((event) => (
                                    <li key={event.id} className="border rounded p-2 flex flex-col justify-end items-center">
                                        <div className="w-300 h-auto mr-300">
                                            <img
                                                src={event.image}
                                                alt={`${event.name} logo`}
                                                className="w-full h-full "
                                            />
                                        </div>
                                        <p className="font-semibold">{event.name}</p>
                                        <p className="text-sm">{event.location}</p>
                                        <p className="text-sm">{formatDate(event.date)}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>Aún no has creado ningún evento.</p>
                        )}
                        <div className="w-full flex flex-row justify-end items-center">
                            <button
                                className="bg-greenPrimary text-white py-2 px-4 rounded-full  cursor-pointer hover:bg-greenSecundary duration-75 mt-4"
                                onClick={() => history.push("/todos-los-eventos")}
                            >
                                <IoIosArrowForward></IoIosArrowForward>
                            </button>
                        </div>
                        </div>
                    
                ):(
                    <div className='font-semibold mb-4' > <p>Aún no has publicado noticias</p></div>
                )
                }
                </div>
                </div>
                
            </div>
        </div>
        <div className="mt-4">
        <div className="border p-4">
          <h3 className="text-xl font-semibold mb-4">Grupos a los que perteneces</h3>
          <hr />
          {userGroups?.length > 0 ? (
            <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {userGroups?.map((group) => (
                <li key={group.id} className="flex items-center mt-2.5">
                  <div className="w-10 h-10 mr-2">
                    <img
                      src={group.image}
                      alt={`${group.name} logo`}
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <span>{group.name}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>Aún no te has unido a ningún grupo.</p>
          )}
        </div>
      </div>
      </div>
    )
}
