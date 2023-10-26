import { BsChevronDown } from 'react-icons/bs';
import { Link } from 'react-router-dom'
import CardNoticia from '../../../components/Cards/CardNoticia/CardNoticia';
import user1 from '../../../../public/person1.png'
import user4 from '../../../../public/person4.png'
import place1 from '../../../../public/place1.jpeg'
import place4 from '../../../../public/place4.jpeg'

export default function Noticias() {

    const noticiasData = [
        {
            _id: 1,
            name: 'Estefanía Menendez',
            title: 'Title',
            location: 'Argentina',
            imageUser: user1,
            imagePlace: place1,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam sequi dolorem modi obcaecati inventore, mollitia natus, vitae sapiente autem unde sint esse. Facere, voluptas maiores? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam sequi dolorem modi obcaecati inventore, mollitia natus, vitae sapiente autem unde sint esse. Facere, voluptas maiores?',
            date: '12/10/23'
        },
        {
            _id: 4,
            name: 'Henry Ramirez',
            title: 'Title',
            location: 'Lima, Pe',
            imageUser: user4,
            imagePlace: place4,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam sequi dolorem modi obcaecati inventore, mollitia natus, vitae sapiente autem unde sint esse. Facere, voluptas maiores? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam sequi dolorem modi obcaecati inventore, mollitia natus, vitae sapiente autem unde sint esse. Facere, voluptas maiores?',
            date: '12/10/23'
        },
    ]
    
    return (
        <div>
            <h1 className="text-2xl font-bold mb-7">Últimas noticias:</h1>

            <div className="flex flex-col md:flex-row gap-10 md:gap-20">
                {noticiasData.map(noticiaData => {
                    return(  
                        <CardNoticia
                            _id={noticiaData._id}
                            name={noticiaData.name}
                            title={noticiaData.title}
                            location={noticiaData.location}
                            imageUser={noticiaData.imageUser}
                            imagePlace={noticiaData.imagePlace}
                            description={noticiaData.description}
                            date={noticiaData.date}
                        />
                        )
                    })}
                </div>

            <div className="my-10 border-b-2 border-gray-300 pb-2">
                <Link to={'/noticias'} className="w-full flex justify-end items-center cursor-pointer">Más noticias <span className="ml-2 text-xl"><BsChevronDown/></span></Link>
            </div>
        </div>
    )
}
