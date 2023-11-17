import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import LinkButton from '../../../../components/LinkButton';


export default function HistorialUsuario({userEvents, formatDate, userGroups, userNews}) {
    // console.log(userEvents);
// console.log(userGroups);
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

    // console.log(userNews);
    return (
      <div className="bg-[#FFFFFF] container mx-auto p-4 lg:p-8">
  <div className="w-full lg:flex">
    <div className="w-full lg:w-1/2 p-3">
      <div className="border shadow-xl bg-graySecundary rounded-[2%]">
        <h3 className="text-xl mt-2 ml-2 font-semibold">Eventos</h3>
        <hr className="mb-4 mt-2 bg-grayPrimary" />
        {userEvents?.length > 0 ? (
          <div className="relative flex flex-col items-center">
            <button
              className="text-2xl text-grayPrimary mr-2 absolute top-1/2 transform -translate-y-1/2 left-2 cursor-pointer hover:text-greenSecundary"
              onClick={showPreviousEvent}
            >
              <IoIosArrowBack />
            </button>
            <button
              className="text-2xl text-grayPrimary absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer hover:text-greenSecundary"
              onClick={showNextEvent}
            >
              <IoIosArrowForward />
            </button>
            <div className="w-full sm:w-4/5 lg:w-80% h-full overflow-hidden relative">
              <img
                src={userEvents[currentEventIndex].image}
                alt={`${userEvents[currentEventIndex].name} logo`}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full sm:w-4/5 lg:w-80% flex flex-col items-center mt-2">
              <p className="font-semibold">
                {userEvents[currentEventIndex].name}
              </p>
              <p className="text-sm">
                {userEvents[currentEventIndex].location}
              </p>
              <p className="text-sm">
                {formatDate(userEvents[currentEventIndex].date)}
              </p>
            </div>
            <Link to="/events/user">
              <button
                title="Ver todas"
                className="bg-greenPrimary text-white py-2 px-4 rounded-full cursor-pointer hover:bg-greenSecundary duration-75 absolute bottom-4 right-4"
              >
                <IoIosArrowForward />
              </button>
            </Link>
          </div>
        ) : (
          <p className='p-3'>Aún no has creado ningún evento.</p>
        )}
      </div>
    </div>
    <div className="w-full lg:w-1/2 p-3">
      <div className="border shadow-xl bg-graySecundary rounded-[2%]">
        <h3 className="text-xl mt-2 ml-2 font-semibold">Noticias</h3>
        <hr className="mb-4 mt-2 bg-grayPrimary" />
        {userNews?.length > 0 ? (
          <div className="relative flex flex-col items-center">
            <button
              className="text-2xl text-grayPrimary mr-2 absolute top-1/2 transform -translate-y-1/2 left-2 cursor-pointer hover:text-greenSecundary"
              onClick={showPreviousNews}
            >
              <IoIosArrowBack />
            </button>
            <button
              className="text-2xl text-grayPrimary absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer hover:text-greenSecundary"
              onClick={showNextNews}
            >
              <IoIosArrowForward />
            </button>
            <div className="w-full sm:w-4/5 lg:w-80% h-full overflow-hidden relative">
              <img
                src={userNews[currentNewsIndex].photo[0]}
                alt={`${userNews[currentNewsIndex].title} logo`}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full sm:w-4/5 lg:w-80% flex flex-col items-center mt-2">
              <p className="font-semibold">
                {userNews[currentNewsIndex].title}
              </p>
              <p className="text-sm">{userNews[currentNewsIndex].location}</p>
            </div>
            <Link to="/news/user">
              <button
                title="Ver todas"
                className="bg-greenPrimary text-white py-2 px-4 rounded-full cursor-pointer hover:bg-greenSecundary duration-75 absolute bottom-4 right-4 "
              >
                <IoIosArrowForward />
              </button>
            </Link>
          </div>
        ) : (
          <p className='p-3'>Aún no has publicado noticias.</p>
        )}
      </div>
    </div>
  </div>
  <div className="mt-6">
    <div className="border p-4 shadow-xl rounded-[2%]">
      <div className='w-full flex flex-row justify-between pb-2'>
      <h3 className="text-xl font-semibold mb-4">Grupos a los que perteneces</h3>
      <Link to="/grupos">
            <button title="Ver todos los grupos"
                className="bg-greenPrimary text-white py-2 px-4 rounded-full cursor-pointer hover:bg-greenSecundary duration-75 bottom-4 right-4 ">+</button></Link>
            </div>
      <hr />
      {userGroups?.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {userGroups?.map((group) => (
            <li key={group._id} className="flex items-center mt-2.5">
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
        <p className='p-3'>Aún no te has unido a ningún grupo.</p>
      )}
    </div>
  </div>
</div>


  );
}
