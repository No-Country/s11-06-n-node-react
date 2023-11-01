import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';


export default function HistorialUsuario({userEvents, formatDate, userGroups, userNews}) {
    console.log(userEvents);
    const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
    const [currentEventIndex, setCurrentEventIndex] = useState(0);

    const showNextEvent = () => {
      setCurrentEventIndex((prevIndex) => (prevIndex + 1) % userEvents.length);
    };
  
    const showPreviousEvent = () => {
      setCurrentEventIndex((prevIndex) => (prevIndex - 1 + userEvents.length) % userEvents.length);
    };
    const showNextNews = () => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % userNews.length);
    };
  
    const showPreviousNews = () => {
      setCurrentNewsIndex((prevIndex) => (prevIndex - 1 + userNews.length) % userNews.length);
    };

    console.log(userNews);
    return (
        <div>
        <div className="mt-8 ">
          <div className="flex">
            <div className="w-1/2 pr-3 ">
              <div className="border p-4 border p-4 shadow-lg">
                <h3 className="text-xl font-semibold">Eventos Creados</h3>
                <hr className="mb-2" />
                {userEvents?.length > 0 ? (
                  <div className="relative flex flex-col items-center ">
                    <button
                      className="text-2xl absolute top-1/2 transform -translate-y-1/2 left-2 cursor-pointer"
                      onClick={showPreviousEvent}
                    >
                      <IoIosArrowBack />
                    </button>
                    <button
                      className="text-2xl absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer"
                      onClick={showNextEvent}
                    >
                      <IoIosArrowForward />
                    </button>
                    <div className="w-64 h-64 overflow-hidden relative">
                      <div className="w-full h-full">
                        <img
                          src={userEvents[currentEventIndex].image}
                          alt={`${userEvents[currentEventIndex].name} logo`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="w-4/5 flex flex-col items-center mt-2">
                        <p className="font-semibold">{userEvents[currentEventIndex].name}</p>
                    <p className="text-sm">{userEvents[currentEventIndex].location}</p>
                    <p className="text-sm">{formatDate(userEvents[currentEventIndex].date)}</p>
                    </div>
                                    <button
                                    title="Ver todos"
                                        className="bg-greenPrimary text-white py-2 px-4 rounded-full cursor-pointer hover:bg-greenSecundary duration-75 absolute bottom-4 right-4"
                                        onClick={() => history.push("/todos-los-eventos")}
                                    >
                                        <IoIosArrowForward />
                                    </button>
                  </div>
                ) : (
                  <p>Aún no has creado ningún evento.</p>
                )}
              </div>
            </div>
            <div className="w-1/2 pl-3">
              {userNews.length ? (
                <div className="border p-4 border p-4 shadow-lg" >
                  <h3 className="text-xl font-semibold">Posteos</h3>
                  <hr className="mb-2" />
                  {userNews?.length > 0 ? (
                    <div className="relative flex flex-col items-center">
                      <button
                        className="text-2xl mr-2 absolute top-1/2 transform -translate-y-1/2 left-2 cursor-pointer"
                        onClick={showPreviousNews}
                      >
                        <IoIosArrowBack />
                      </button>
                      <button
                        className="text-2xl absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer"
                        onClick={showNextNews}
                      >
                        <IoIosArrowForward />
                      </button>
                      <div className="w-64 h-64 overflow-hidden relative">
                        <div className="w-full h-full">
                          <img
                            src={userNews[currentNewsIndex].photo[0]}
                            alt={`${userNews[currentNewsIndex].title} logo`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div >
                      <div className="w-4/5 flex flex-col items-center mt-2">
                        <p className="font-semibold">{userNews[currentNewsIndex].title}</p>
                      <p className="text-sm">{userNews[currentNewsIndex].location}</p>
                      </div>
                      
                      <button
                      title="Ver todas"
  className="bg-greenPrimary text-white py-2 px-4 rounded-full cursor-pointer hover:bg-greenSecundary duration-75 absolute bottom-4 right-4"
  onClick={() => history.push("/todos-las-noticias" )}
>
  <IoIosArrowForward />
</button>
                    </div>
                  ) : (
                    <p>Aún no has creado ningún evento.</p>
                  )}
                </div>
              ) : (
                <div className='font-semibold mb-4'>
                  <p>Aún no has publicado noticias</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="border p-4 border p-4 shadow-lg">
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
  );
}
