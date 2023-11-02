import { useState, useEffect } from 'react';
import CustomCard from '../../../../components/Card';
import Typography from '../../../../components/Typography';
import createEventRepository from '../../Repository/eventRepository';
import { formatDate } from '../../../../utils/formatDates';
import LinkButton from '../../../../components/LinkButton';
import { Link } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';
import { ImageBg } from '../../../../components/Images/ImageProfileUser'

const EventList = () => {
    const { getAllEvents } = createEventRepository();
    const events = getAllEvents();

    // Estado para almacenar las tarjetas de eventos seleccionadas aleatoriamente
    const [randomEvents, setRandomEvents] = useState([]);

    useEffect(() => {
        // Función para seleccionar 4 eventos aleatorios
        const getRandomEvents = () => {
            const shuffledEvents = events.sort(() => 0.5 - Math.random());
            const selectedEvents = shuffledEvents.slice(0, 3);
            setRandomEvents(selectedEvents);
        };

        if (events.length > 4) {
            getRandomEvents();
        }
    }, [events]);

    return (
        <div>
            <Typography.TitleContainer>
                Eventos
            </Typography.TitleContainer>
            <section className='flex flex-col md:flex-row gap-4 w-full '>
                {randomEvents.map((event) => (
                    <CustomCard key={event.id}>
                        <CustomCard.Header className="w-full h-20 bg-zinc-300 rounded-tl-2xl rounded-tr-2xl">
                            <ImageBg imagen={event.image} />
                        </CustomCard.Header>
                        <CustomCard.Body className="px-6">
                            <Typography>
                                <ul className='flex  gap-2'>
                                    {event.topics && event.topics.map((topic) => (
                                        <li key={event.id} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                                            {topic}
                                        </li>
                                    ))}
                                </ul>
                                <span className='flex  gap-2'> {event.topics && event.topics.map((topic) => topic)}</span>
                                <Typography.SubtitleContainer> {event.name} </Typography.SubtitleContainer>
                                <Typography.Base> {event.location} </Typography.Base>
                                <Typography.Small className="font-bold">  {formatDate(event.date)} </Typography.Small>
                            </Typography>
                        </CustomCard.Body>
                        <CustomCard.Footer className="p-4">
                            <LinkButton className='bg-greenSecundary' href={`/eventos/${event.id}`} >Ver más</LinkButton>
                        </CustomCard.Footer>
                    </CustomCard>
                ))}
            </section>
            <div className="my-10 border-b-2 border-gray-300 pb-2">
                <Link to={'/eventos'} className="w-full flex justify-end items-center cursor-pointer">Más eventos <span className="ml-2 text-xl"><BsChevronDown /></span></Link>
            </div>
        </div>
    );
}

export default EventList;
