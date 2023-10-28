import React from 'react'
import CustomCard from '../../../../components/Card'
import Typography from '../../../../components/Typography'
import { createEventRepository } from '../../Repository/eventRepository'
import { formatDate } from '../../../../utils/formatDates'
import LinkButton from '../../../../components/LinkButton'

const EventList = () => {

    const { getAllEvents } = createEventRepository()
    const events = getAllEvents();

    return (
        <div>
            <Typography.TitleContainer>
                Eventos
            </Typography.TitleContainer>

            <section className='flex flex-col md:flex-row gap-4
                            w-full  '
            >
                {events && events.map((event) => (
                    <CustomCard key={event.id} className=" "> 

                        <CustomCard.Header className="w-full h-20 bg-zinc-300 rounded-tl-2xl rounded-tr-2xl">
                            {/* imagen del header */}
                        </CustomCard.Header>

                        <CustomCard.Body className="px-6">
                            <Typography>
                                <span className='flex  gap-2'> {event.topics && event.topics.map((topic) => topic )}</span>
                                <Typography.SubtitleContainer> {event.name} </Typography.SubtitleContainer>
                                <Typography.Base> {event.location} </Typography.Base>
                                <Typography.Small className="font-bold">  {formatDate(event.date)} </Typography.Small>
                            </Typography>
                        </CustomCard.Body>

                        <CustomCard.Footer className="p-4">
                            <LinkButton className=' bg-indigo-300 '>Ver más</LinkButton>
                            {/* Pie de componente */}
                        </CustomCard.Footer>

                    </CustomCard>
                ))}



            </section>

        </div>
    )
}

export default EventList