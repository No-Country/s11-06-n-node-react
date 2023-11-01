import Typography from "../../../../components/Typography"
import SearchBar from "../../../../components/SearchBar/SearchBar"
import CardNoticia from "../../../../components/Cards/CardNoticia/CardNoticia"
import { useSelector } from "react-redux";


export default function AllNews() {
    const userNews = useSelector((state) => state.user.userNews);
    const userDetail = useSelector((state) => state.user.userDetail);
    console.log(userNews);
    console.log(userDetail);
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
      };

    return (
        <div>
            <SearchBar/>
            <Typography.TitleContainer>Tus Noticias</Typography.TitleContainer>
            <Link to="/perfil"><div className="flex items-center w-full text-gray-500 hover:text-gray-700"> 
            <IoMdArrowRoundBack ></IoMdArrowRoundBack>volver
        </div></Link>
            <div className='flex flex-col gap-y-10 md:gap-y-20'>
                {userNews.map(noticiaData => {
                    return(
                        <CardNoticia
                            _id={noticiaData._id}
                            name={noticiaData.name}
                            title={noticiaData.title}
                            location={noticiaData.location}
                            imageUser={userDetail.avatar}
                            imagePlace={noticiaData.photo[0]}
                            description={noticiaData.description}
                            date={formatDate(noticiaData.createdAt)}
                        />
                    )
                })}
            </div>
        </div>
    
    )
}
