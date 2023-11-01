import CardNoticia from '../../../components/Cards/CardNoticia/CardNoticia'
import ListCardFirends from '../../../components/ListCardFriends'
import SearchBar from '../../../components/SearchBar/SearchBar'
import Sidebar from '../../../components/Sidebar/Sidebar'

import user1 from '../../../../public/person1.png'
import user2 from '../../../../public/person2.png'
import user3 from '../../../../public/person3.png'
import user4 from '../../../../public/person4.png'
import user5 from '../../../../public/person5.png'
import user6 from '../../../../public/person6.png'
import user7 from '../../../../public/person7.png'
import place1 from '../../../../public/place1.jpeg'
import place2 from '../../../../public/place2.jpeg'
import place3 from '../../../../public/place3.jpeg'
import place4 from '../../../../public/place4.jpeg'
import place5 from '../../../../public/place5.jpeg'
import place6 from '../../../../public/place6.jpeg'
import place7 from '../../../../public/place7.jpeg'
import Typography from '../../../components/Typography'

import userData from '../../../utils/data.json'

export default function NoticiasPage() {
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
            _id: 2,
            name: 'Gustavo Torres',
            title: 'Title',
            location: 'Córdova, Arg',
            imageUser: user2,
            imagePlace: place2,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam sequi dolorem modi obcaecati inventore, mollitia natus, vitae sapiente autem unde sint esse. Facere, voluptas maiores? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam sequi dolorem modi obcaecati inventore, mollitia natus, vitae sapiente autem unde sint esse. Facere, voluptas maiores?',
            date: '12/10/23'
        },
        {
            _id: 3,
            name: 'Carolina Ramirez',
            title: 'Title',
            location: 'Brasil',
            imageUser: user3,
            imagePlace: place3,
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
        {
            _id: 5,
            name: 'Elvis Segovia',
            title: 'Title',
            location: 'Paraguay',
            imageUser: user5,
            imagePlace: place5,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam sequi dolorem modi obcaecati inventore, mollitia natus, vitae sapiente autem unde sint esse. Facere, voluptas maiores? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam sequi dolorem modi obcaecati inventore, mollitia natus, vitae sapiente autem unde sint esse. Facere, voluptas maiores?',
            date: '12/10/23'
        },
        {
            _id: 6,
            name: 'Kevin Tea',
            title: 'Title',
            location: 'Argentina',
            imageUser: user6,
            imagePlace: place6,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam sequi dolorem modi obcaecati inventore, mollitia natus, vitae sapiente autem unde sint esse. Facere, voluptas maiores? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam sequi dolorem modi obcaecati inventore, mollitia natus, vitae sapiente autem unde sint esse. Facere, voluptas maiores?',
            date: '12/10/23'
        },
        {
            _id: 7,
            name: 'Alexander Briones',
            title: 'Title',
            location: 'Trujillo',
            imageUser: user7,
            imagePlace: place7,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam sequi dolorem modi obcaecati inventore, mollitia natus, vitae sapiente autem unde sint esse. Facere, voluptas maiores? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam sequi dolorem modi obcaecati inventore, mollitia natus, vitae sapiente autem unde sint esse. Facere, voluptas maiores?',
            date: '12/10/23'
        }
    ]

    return (
        <div>
            {userData.users.map(user => (
                <p>{user.name}</p>
                // <img src={user.imageUser}/>
            ))}

            <SearchBar/>
            <Typography.TitleContainer>Noticias</Typography.TitleContainer>

            <div className='flex flex-col gap-y-10 md:gap-y-20'>
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
        </div>
    
    )
}
