import SearchBar from '../../../components/SearchBar/SearchBar'
import ListCardFirends from '../../../components/ListCardFriends'
import Sidebar from '../../../components/Sidebar/Sidebar'
import Typography from '../../../components/Typography'
import CustomCard from '../../../components/Card'
import createEventRepository from '../../Dashboard/Repository/eventRepository'
import { formatDate } from '../../../utils/formatDates'
import LinkButton from '../../../components/LinkButton'
import { ImageBg } from '../../../components/Images/ImageProfileUser'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllEvents } from '../../../Redux/Actions/EventGet'

export default function EventosPage() {
  const dispatch = useDispatch()
  const events = useSelector((state) => state.event.events)

  useEffect(() => {
    dispatch(getAllEvents())
  }, [dispatch])

  return (
    <div>
      <SearchBar />

      <Typography.TitleContainer>Eventos</Typography.TitleContainer>

      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3   gap-4 w-full mt-8 overflow-x-auto ">
        {events &&
          events.map((event) => (
            <CustomCard key={event.id} className="">
              <CustomCard.Header className="w-full h-20 bg-zinc-300 rounded-tl-2xl rounded-tr-2xl">
                <ImageBg imagen={event.image} />
                {/* imagen del header */}
              </CustomCard.Header>
              <CustomCard.Body className="px-6">
                <Typography>
                  <ul className="flex gap-2">
                    {event.topics &&
                      event.topics.map((topic, index) => (
                        <li
                          key={event._id + '-' + index}
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
                {/* Pie de componente */}
              </CustomCard.Footer>
            </CustomCard>
          ))}
      </section>
    </div>
  )
}
