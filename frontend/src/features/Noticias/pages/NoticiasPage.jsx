import CardNoticia from '../../../components/Cards/CardNoticia/CardNoticia'
import ListCardFirends from '../../../components/ListCardFriends'
import SearchBar from '../../../components/SearchBar/SearchBar'
import Sidebar from '../../../components/Sidebar/Sidebar'

let user1 = '/person1.png'
let user2 = '/person2.png'
let user3 = '/person3.png'
let user4 = '/person4.png'
let user5 = '/person5.png'
let user6 = '/person6.png'
let user7 = '/person7.png'
let place1 = '/place1.jpeg'
let place2 = '/place2.jpeg'
let place3 = '/place3.jpeg'
let place4 = '/place4.jpeg'
let place5 = '/place5.jpeg'
let place6 = '/place6.jpeg'
let place7 = '/place7.jpeg'
import Typography from '../../../components/Typography'

export default function NoticiasPage() {
  const noticiasData = [
    {
      _id: 1,
      name: 'Estefanía Menendez',
      title: 'Title',
      location: 'Buenos Aires, Arg',
      imageUser: user1,
      imagePlace: place1,
      description:
        '¡Bienvenidos a la cautivadora Ciudad Autónoma de Buenos Aires, la joya cosmopolita de Argentina que nunca deja de sorprender! Sumérgete en la elegancia de sus barrios históricos como San Telmo y la belleza de sus avenidas como la icónica Avenida 9 de Julio. Buenos Aires, cuna del tango, te invita a sentir el latido de su corazón cultural en cada rincón, desde el arte en el barrio de La Boca hasta las elegantes galerías de Palermo. Disfruta de la pasión del fútbol en el estadio de La Bombonera y déjate tentar por la deliciosa gastronomía porteña en sus innumerables cafés y parrillas. Buenos Aires es una ciudad de contrastes, donde la tradición se mezcla con la modernidad, y la hospitalidad de su gente te hará sentir como en casa. ¡Te esperamos con los brazos abiertos para que descubras la energía única de Buenos Aires, la capital que nunca duerme!',
      date: '10/10/23',
    },
    {
      _id: 2,
      name: 'Gustavo Torres',
      title: 'Title',
      location: 'Córdoba, Arg',
      imageUser: user2,
      imagePlace: place2,
      description:
        '¡Saludos desde la encantadora Córdoba, Argentina! Esta tierra de sierras y tradiciones te invita a descubrir su magia única. En Córdoba, la hospitalidad se entrelaza con la historia en cada rincón. Pasea por las calles empedradas de la ciudad colonial, maravíllate con la imponente arquitectura de sus iglesias y sumérgete en la cultura que late en cada festival y celebración. Además, no te pierdas la oportunidad de explorar las sierras que rodean la ciudad, donde la naturaleza se despliega en su máxima expresión. Córdoba te espera con sus paisajes pintorescos, su gente amigable y una mezcla de sabores que deleitarán tu paladar. ¡Ven a vivir la experiencia cordobesa, donde la tradición y la modernidad se encuentran en armonía! ¡Te esperamos con los brazos abiertos en Córdoba, la tierra que cautiva corazones!',
      date: '15/10/23',
    },
    {
      _id: 3,
      name: 'Carolina Ramirez',
      title: 'Title',
      location: 'Brasil',
      imageUser: user3,
      imagePlace: place3,
      description:
        '¡Bem-vindo ao vibrante Brasil, um país cheio de cores, música e calor humano! Seja bem-vindo a um convite para explorar as maravilhas deste destino apaixonante. Do calor das praias do Rio de Janeiro à exuberância da Floresta Amazônica, o Brasil é uma terra de diversidade inigualável. Desfrute da alegria contagiante durante o Carnaval, mergulhe nas águas cristalinas de Fernando de Noronha, e saboreie a culinária única que combina sabores regionais de norte a sul. Seja você um amante da natureza, da cultura ou da festa, o Brasil tem algo especial para oferecer a todos os visitantes. Venha fazer parte dessa festa de cores, ritmos e sorrisos. O Brasil te espera de braços abertos para uma experiência inesquecível. ¡Venha descobrir a magia do Brasil!',
      date: '20/10/23',
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
    {
      _id: 5,
      name: 'Elvis Segovia',
      title: 'Title',
      location: 'Paraguay',
      imageUser: user5,
      imagePlace: place5,
      description:
        '¡Bienvenidos a la encantadora tierra de Paraguay, donde la calidez humana se mezcla con la rica diversidad cultural y paisajes cautivadores! Descubre la autenticidad de Asunción, la vibrante capital que fusiona la historia con la modernidad. Explora la Plaza de los Héroes y sumérgete en la cultura guaraní que impregna cada rincón del país. Paraguay te invita a explorar sus maravillas naturales, desde las Cataratas del Monday hasta las exuberantes selvas y los ríos serpenteantes. No te pierdas la oportunidad de saborear la deliciosa gastronomía paraguaya, con platos tradicionales como la sopa paraguaya y la chipa. La hospitalidad de su gente te hará sentir como en familia, y la música guaraní resonará en tu corazón. ¡Ven y descubre la autenticidad y la belleza única de Paraguay, un destino que te recibirá con los brazos abiertos!',
      date: '28/10/23',
    },
    {
      _id: 6,
      name: 'Kevin Tea',
      title: 'Title',
      location: 'Mar del Plata, Arg',
      imageUser: user6,
      imagePlace: place6,
      description:
        '¡Bienvenidos a la increíble Mar del Plata, el rincón de Argentina que combina la frescura del mar con la calidez de su gente! Sumérgete en la brisa marina que acaricia nuestras playas doradas y descubre la magia de esta ciudad costera. Mar del Plata te invita a disfrutar de sus extensas playas, vibrante vida nocturna, y una oferta cultural que te dejará fascinado. Déjate seducir por los aromas de sus parrillas, donde el asado argentino alcanza su máxima expresión, y maravíllate con la arquitectura de la ciudad, que mezcla la tradición con la modernidad. Ven a vivir la experiencia única de Mar del Plata, donde cada ola cuenta una historia y cada rincón te espera con una sonrisa. ¡Te esperamos con los brazos abiertos para que descubras la belleza y la alegría que ofrece esta joya costera de Argentina!',
      date: '30/10/23',
    },
    {
      _id: 7,
      name: 'Alexander Briones',
      title: 'Title',
      location: 'Trujillo',
      imageUser: user7,
      imagePlace: place7,
      description:
        '¡Bienvenidos a la fascinante Trujillo, un rincón encantador de México que te invita a sumergirte en su rica historia, tradiciones vibrantes y hospitalidad excepcional! Situada en el hermoso estado de Guanajuato, Trujillo te espera con sus calles empedradas y sus coloridas fachadas coloniales. Explora el encanto de la Plaza Principal, donde la vida local cobra vida con la música, la danza y la alegría de su gente. No te pierdas la oportunidad de visitar sus sitios históricos, como la Parroquia de San Miguel Arcángel, que te transportará a épocas pasadas.La gastronomía de Trujillo es una experiencia en sí misma. Disfruta de los sabores auténticos de la cocina mexicana en los acogedores restaurantes locales.Ya sea explorando sus mercados llenos de colores o participando en festivales culturales, Trujillo te ofrece una auténtica experiencia mexicana. ¡Ven y descubre la magia de Trujillo, donde la tradición y la modernidad se entrelazan en un abrazo cálido y acogedor!',
      date: '1/11/23',
    },
  ]

  return (
    <div>
      <SearchBar />
      <Typography.TitleContainer>Noticias</Typography.TitleContainer>

      <div className="flex flex-col gap-y-10 md:gap-y-20">
        {noticiasData.map((noticiaData) => {
          return (
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
