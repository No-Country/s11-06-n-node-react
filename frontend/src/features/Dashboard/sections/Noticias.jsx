import { BsChevronDown } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import CardNoticia from '../../../components/Cards/CardNoticia/CardNoticia'
let user1  = '/person1.png'
let user4  = '/person4.png'
let place1 =  '/place1.jpeg'
let place4 =  '/place4.jpeg'
let loader =  "/loadermate.gif"
import Typography from '../../../components/Typography'

export default function Noticias() {
  const noticiasData = [
    {
      _id: 1,
      name: 'Estefanía Menendez',
      title: 'Title',
      location: 'Argentina',
      imageUser: user1,
      imagePlace: place1,
      description:
        '¡Bienvenidos a la cautivadora Ciudad Autónoma de Buenos Aires, la joya cosmopolita de Argentina que nunca deja de sorprender! Sumérgete en la elegancia de sus barrios históricos como San Telmo y la belleza de sus avenidas como la icónica Avenida 9 de Julio. Buenos Aires, cuna del tango, te invita a sentir el latido de su corazón cultural en cada rincón, desde el arte en el barrio de La Boca hasta las elegantes galerías de Palermo. Disfruta de la pasión del fútbol en el estadio de La Bombonera y déjate tentar por la deliciosa gastronomía porteña en sus innumerables cafés y parrillas. Buenos Aires es una ciudad de contrastes, donde la tradición se mezcla con la modernidad, y la hospitalidad de su gente te hará sentir como en casa. ¡Te esperamos con los brazos abiertos para que descubras la energía única de Buenos Aires, la capital que nunca duerme!',
      date: '10/10/23',
    },
    {
      _id: 4,
      name: 'Henry Ramirez',
      title: 'Title',
      location: 'Lima, Pe',
      imageUser: user4,
      imagePlace: place4,
      description:
        '¡Saludos desde la hermosa Lima, Perú! En el corazón de esta ciudad llena de historia, cultura y sabores únicos, te invitamos a sumergirte en una experiencia inolvidable. Lima, con su encanto vibrante, te espera con brazos abiertos para explorar sus callejuelas llenas de colores, disfrutar de su rica gastronomía que ha conquistado paladares a nivel mundial y sumergirte en la calidez de su gente. Ven y descubre la magia de sus plazas históricas, pasea por sus parques llenos de vida, y déjate envolver por la energía contagiosa que fluye por sus calles. Lima es más que una ciudad, es un abrazo lleno de tradición y modernidad que te hará sentir como en casa. ¡Te esperamos con los brazos abiertos en Lima, la ciudad que nunca deja de sorprender!',
      date: '27/10/23',
    },
  ]

  return (
    !noticiasData.length? (<div className="w-[100%] h-[100%] justify-center mt-8 flex"><img src={loader} className="h-[50%] w-[30%]" alt="Cargando..." /></div>): (
    <div>
      <Typography.TitleContainer>Últimas noticias</Typography.TitleContainer>
      <div className="flex flex-col md:flex-row gap-10 md:gap-20">
        {noticiasData.map((noticiaData) => {
          return (
            <CardNoticia
              key={noticiaData._id}
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
        <Link
          to={'/noticias'}
          className="w-full flex justify-end items-center cursor-pointer"
        >
          Más noticias{' '}
          <span className="ml-2 text-xl">
            <BsChevronDown />
          </span>
        </Link>
      </div>
    </div>
  ))
}
