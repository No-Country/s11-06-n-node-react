import Typography from "../../../../components/Typography"
import SearchBar from "../../../../components/SearchBar/SearchBar"
import CardNoticia from "../../../../components/Cards/CardNoticia/CardNoticia"
import { useSelector } from "react-redux";
import CustomCard from "../../../../components/Card";
import LinkButton from "../../../../components/LinkButton";
import { ImageBg } from "../../../../components/Images/ImageProfileUser";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";



export default function AllEvents() {
    const userEvents = useSelector((state) => state.user.userEvents);
    const userDetail = useSelector((state) => state.user.userDetail);
    console.log(userEvents);
    console.log(userDetail);
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
      };

    return (
        <div >
        <SearchBar />
        <Typography.TitleContainer>
            Eventos
        </Typography.TitleContainer>
        <Link to="/perfil"><div className="flex items-center w-full text-gray-500 hover:text-gray-700"> 
            <IoMdArrowRoundBack ></IoMdArrowRoundBack>volver
        </div></Link>
        
        <hr />
        <section className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3   gap-4 w-full mt-8 overflow-x-auto '>
            {userEvents && userEvents.map((event) => (
                <CustomCard key={event.id} className=" ">

                    <CustomCard.Header className="w-full h-20 bg-zinc-300 rounded-tl-2xl rounded-tr-2xl">
                        <ImageBg imagen={event.image} />
                        {/* imagen del header */}
                    </CustomCard.Header>

                    <CustomCard.Body className="px-6">
                        <Typography>
                            <ul className='flex  gap-2'>
                                {event.topics && event.topics.map((topic) => (
                                    <li class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
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
                        {/* Pie de componente */}
                    </CustomCard.Footer>

                </CustomCard>
            ))}



        </section>
    </div>
    
    )
}

