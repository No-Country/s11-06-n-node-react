import { useState, useEffect } from 'react'
import CustomCard from '../../../../components/Card'
import Typography from '../../../../components/Typography'
import createEventRepository from '../../Repository/eventRepository'
import { formatDate } from '../../../../utils/formatDates'
import LinkButton from '../../../../components/LinkButton'
import { Link } from 'react-router-dom'
import { BsChevronDown } from 'react-icons/bs'
import { ImageBg } from '../../../../components/Images/ImageProfileUser'
import { useSelector, useDispatch } from 'react-redux'
import { getAllEvents } from '../../../../Redux/Actions/EventGet'
let loader = "/loadermate.gif"

const EventList = () => {
  const dispatch = useDispatch()
  const events = useSelector((state) => state.event.events)

  useEffect(() => {
    dispatch(getAllEvents())
  }, [dispatch])

  // Función para seleccionar 3 eventos aleatorios
  const getRandomEvents = () => {
    const randomEvents = [...events]
    for (let i = randomEvents.length - 1; i > 2; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[randomEvents[i], randomEvents[j]] = [randomEvents[j], randomEvents[i]]
    }
    return randomEvents.slice(0, 3)
  }

  const randomEvents = getRandomEvents()

  return (
!randomEvents.length? (<div className="w-[100%] h-[100%] justify-center mt-8 flex"><img src={loader} className="h-[50%] w-[30%]" alt="Cargando..." /></div>): (
<div>
      <Typography.TitleContainer>Eventos</Typography.TitleContainer>
      <section className="flex flex-col md:flex-row gap-4 w-full ">
        {randomEvents.map((event, index) => (
          <CustomCard key={index}>
            <CustomCard.Header className="w-full h-20 bg-zinc-300 rounded-tl-2xl rounded-tr-2xl">
              <ImageBg imagen={event.image} />
            </CustomCard.Header>
            <CustomCard.Body className="px-6">
              <Typography>
                <ul className="flex  gap-2">
                  {event.topics &&
                    event.topics.map((topic, index) => (
                      <li
                        key={index}
                        className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm"
                      >
                        {topic}
                      </li>
                    ))}
                </ul>
                <Typography.SubtitleContainer>
                  {' '}
                  {event.name}{' '}
                </Typography.SubtitleContainer>
                <Typography.Base> {event.location} </Typography.Base>
                <Typography.Small className="font-bold">
                  {' '}
                  {formatDate(event.date)}{' '}
                </Typography.Small>
              </Typography>
            </CustomCard.Body>
            <CustomCard.Footer className="p-4">
              <LinkButton
                className="bg-greenSecundary"
                href={`/eventos/${event._id}`}
              >
                Ver más
              </LinkButton>
            </CustomCard.Footer>
          </CustomCard>
        ))}
      </section>
      <div className="my-10 border-b-2 border-gray-300 pb-2">
        <Link
          to={'/eventos'}
          className="w-full flex justify-end items-center cursor-pointer"
        >
          Más eventos{' '}
          <span className="ml-2 text-xl">
            <BsChevronDown />
          </span>
        </Link>
      </div>
    </div>)

    
  )
}

export default EventList
