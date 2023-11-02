import SearchBar from '../../../components/SearchBar/SearchBar'
import ListCardFirends from '../../../components/ListCardFriends'
import Sidebar from '../../../components/Sidebar/Sidebar'
import Typography from '../../../components/Typography'
import CustomCard from '../../../components/Card'
import { ImageBg } from '../../../components/Images/ImageProfileUser'
import { useParams } from 'react-router-dom'
import EventList from '../../Dashboard/components/EventList'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getEventDetail } from '../../../Redux/Actions/EventGet'
import { set } from 'react-hook-form'

function AddIncludes(prop){
    if(JSON.stringify(prop.includes)){
        if(prop.includes && prop.includes.length > 0){
            return(
                <section className='flex flex-col md:flex-row gap-4 w-full '>
                    {prop.includes.map((include, index) => (
                        <CustomCard key={index} className=" min-w-min p-4">
                            <CustomCard.Body className="min-w-min   ">
                                <Typography>
                                    <Typography.Base className="font-semibold ">{include.title}</Typography.Base>
                                    <Typography.Small>
                                        {include.description &&
                                            include.description.map((oneInclude) => (
                                                <div>{ oneInclude }</div>
                                            ))}
                                    </Typography.Small>
                                </Typography>
                            </CustomCard.Body>
                        </CustomCard>
                    ))}
                </section>
            )
        }
    }
    return null
}


export default function EventoIdPage() {
    let { eventId } = useParams()
    const dispatch = useDispatch()
    const event = useSelector((state) => state.event.eventDetail)
    useEffect(() => {
        console.log(eventId);
        dispatch(getEventDetail(eventId))
    },[dispatch])

    return (
        <div>
            <SearchBar />
            <section className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3   gap-4 w-full mt-8 overflow-x-auto '>
                <div className='max-w-7xl mx-auto  flex flex-col gap-8'>
                    <Typography>
                        <Typography.TitleContainer>
                            {event.name}
                        </Typography.TitleContainer>
                        <Typography.Base> {event.location} </Typography.Base>
                        <hr />
                    </Typography>
                    <div className="w-full h-96 grid grid-cols-4 gap-2">
                        <ImageBg imagen={event.image} className="rounded-t-none h-96" />
                        <ImageBg imagen={event.image} className="rounded-t-none h-96" />
                        <ImageBg imagen={event.image} className="rounded-t-none h-96" />
                        <ImageBg imagen={event.image} className="rounded-t-none h-96" />
                    </div>

                    <Typography>
                        <Typography.SubtitleContainer> Experiencia ofrecida por Alexander </Typography.SubtitleContainer>
                        <ul className='flex  gap-2'>
                            {event.topics && event.topics.map((topic) => (
                                <li class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                                    {topic}
                                </li>
                            ))}
                        </ul>
                    </Typography>

                    <hr />

                    <ul className='flex flex-col gap-4'>
                        {event.reasons && event.reasons.map((reason) => (
                            <li>
                                <Typography>
                                    <Typography.Base className="font-semibold -mb-2">{reason.title}</Typography.Base>
                                    <Typography.Small>{reason.description}</Typography.Small>
                                </Typography>
                            </li>
                        ))}
                    </ul>

                    <hr />

                    <Typography>
                        <Typography.SubtitleContainer> Qué harás </Typography.SubtitleContainer>
                        <Typography.Small> {event.description}
                        </Typography.Small>
                    </Typography>

                    <hr />

                    <Typography>
                        <Typography.SubtitleContainer> Qué incluye </Typography.SubtitleContainer>
                        <AddIncludes includes={event.includes} />
                    </Typography>

                    <hr />

                    <Typography>
                        <Typography.SubtitleContainer> Lo que debes saber </Typography.SubtitleContainer>
                        <section className='flex gap-20'>
                            {event.youMustKnow && event.youMustKnow.map((include, index) => (
                                <Typography>
                                    <Typography.Base className="font-semibold ">{include.title}</Typography.Base>
                                    <Typography.Small>
                                        {include.description &&
                                            include.description.map((oneInclude) => (
                                                <div>{ oneInclude }</div>
                                            ))}
                                    </Typography.Small>
                                </Typography>
                            ))}
                        </section>
                    </Typography>

                    <hr />

                    <EventList />

                </div>
            </section>
        </div>
    )
}
