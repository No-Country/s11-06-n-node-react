const eventList = [
  {
    "id": 1,
    "image": "https://images.rove.me/w_1920,q_85/t12xwzzwojizcdls68ny/new-york-picnic-season-in-central-park.jpg",
    "name": "Festival de Música",
    "location": "Central Park, Nueva York",
    "date": "2023-10-15",
    "topics": ["Música", "Festival", "Entretenimiento"],
    "description": "El Festival de Música en Central Park es un evento anual que reúne a los amantes de la música de todo el mundo. Durante tres días, podrás disfrutar de actuaciones en vivo de artistas de renombre y descubrir nuevos talentos. La música de diversos géneros llena el aire y crea un ambiente vibrante y emocionante.",
    "reasons": [
      { "title": "Actuaciones de primer nivel", "description": "El festival presenta artistas y bandas de renombre mundial que ofrecen actuaciones impresionantes durante todo el evento." },
      { "title": "Diversidad musical", "description": "Con múltiples escenarios y géneros musicales, hay algo para todos los gustos, desde el pop hasta el jazz." },
      { "title": "Ambiente único", "description": "La ubicación en Central Park brinda un entorno hermoso y relajante para disfrutar de la música al aire libre." }
    ],
    "includes": [
      { "title": "Entrada al Evento", "description": ["Acceso al festival de música", "Oportunidad de asistir a múltiples actuaciones"] },
      { "title": "Áreas de Picnic", "description": ["Zonas de picnic designadas para relajarse y disfrutar de la música"] },
      { "title": "Comida y Bebida", "description": ["Variedad de opciones culinarias y bebidas refrescantes"] },
      { "title": "Mercancía del Evento", "description": ["Oportunidad de comprar recuerdos del festival"] }
    ],
    "youMustKnow": [
      {
        "title": "Qué llevar",
        "description": ["Ropa cómoda y adecuada para la temporada", "Protector solar y gorra", "Un abrigo o chaqueta para la noche"]
      },
      {
        "title": "Requisitos para participar",
        "description": ["Boleto de entrada", "Identificación válida para verificar la edad", "Entradas para las actividades adicionales si las hay"]
      }
    ]
  },
  {
    "id": 2,
    "image": "https://www.transmedia.cl/wp-content/uploads/2018/11/samsunginfinitymuesa.png",
    "name": "Conferencia de Tecnología",
    "location": "Centro de Convenciones, San Francisco",
    "date": "2023-11-05",
    "topics": ["Tecnología", "Innovación", "Networking"],
    "description": "La Conferencia de Tecnología es un evento líder en el mundo de la innovación y la tecnología. Reúne a expertos de la industria, startups prometedoras y profesionales de todo el mundo. A través de charlas inspiradoras y sesiones interactivas, te sumergirás en las últimas tendencias tecnológicas y tendrás la oportunidad de conectarte con personas influyentes en el campo de la tecnología.",
    "reasons": [
      { "title": "Charlas informativas", "description": "Escucharás a expertos en tecnología compartir ideas innovadoras y conocimientos sobre las últimas tendencias." },
      { "title": "Networking de alta calidad", "description": "Conoce a profesionales y emprendedores líderes en la industria y establece conexiones valiosas." },
      { "title": "Oportunidades de aprendizaje", "description": "Participa en talleres prácticos y obtén información valiosa para tu carrera en tecnología." }
    ],
    "includes": [
      { "title": "Acceso a charlas y paneles", "description": ["Participación en todas las charlas y sesiones de la conferencia"] },
      { "title": "Material de conferencia", "description": ["Documentación y recursos de las charlas"] },
      { "title": "Comida y bebida", "description": ["Almuerzos y refrigerios durante la conferencia"] },
      { "title": "Red de contactos", "description": ["Oportunidad de conectarte con expertos en tecnología"] }
    ],
    "youMustKnow": [
      {
        "title": "Qué llevar",
        "description": ["Portátil o dispositivo para tomar notas", "Tarjetas de presentación para networking", "Ropa de negocios adecuada"]
      },
      {
        "title": "Requisitos para participar",
        "description": ["Registro previo en línea", "Boleto de entrada", "Identificación personal"]
      }
    ]
  },
  {
    "id": 3,
    "image": "https://lh3.googleusercontent.com/ci/ALr3YSEYPAerYGC8H1VnV9-qakuGhaTMGTuTPPgbKp9aQBgWxXPVjY4PuUHLNX8tFqFkHTYJcDxVtQ=s1200",
    "name": "Exposición de Arte",
    "location": "Museo Metropolitano, Londres",
    "date": "2023-09-25",
    "topics": ["Arte", "Cultura", "Galería"],
    "description": "La Exposición de Arte en el Museo Metropolitano de Londres es una experiencia cultural que te sumergirá en el mundo del arte. Podrás admirar obras maestras, explorar diferentes corrientes artísticas y aprender sobre la historia del arte. Es una oportunidad única para apreciar la creatividad humana.",
    "reasons": [
      { "title": "Obras de renombre", "description": "Verás obras icónicas de artistas famosos que han dejado huella en la historia del arte." },
      { "title": "Exploración cultural", "description": "Sumérgete en la diversidad cultural a través de las diversas exposiciones y galerías." },
      { "title": "Aprendizaje enriquecedor", "description": "Obtén conocimientos sobre la historia del arte y las influencias detrás de cada obra." }
    ],
    "includes": [
      { "title": "Entrada al Museo", "description": ["Acceso a todas las exposiciones y galerías del Museo Metropolitano"] },
      { "title": "Guía del museo", "description": ["Información detallada sobre las obras y la historia del museo"] },
      { "title": "Oportunidades de compra", "description": ["Posibilidad de adquirir reproducciones de obras de arte y recuerdos"] },
      { "title": "Talleres y demostraciones", "description": ["Participación en talleres prácticos y demostraciones de arte"] }
    ],
    "youMustKnow": [
      {
        "title": "Qué llevar",
        "description": ["Cámara o dispositivo para tomar fotos", "Ropa cómoda para caminar", "Auriculares para la guía de audio"]
      },
      {
        "title": "Requisitos para participar",
        "description": ["Compra de boleto de entrada", "Respeto por las reglas del museo", "Actitud abierta para apreciar el arte"]
      }
    ],
  },
  {
    "id": 4,
    "image": "https://img.remediosdigitales.com/3d8650/los-mejores-mercadillos-de-navidad-de-paris/450_1000.jpg",
    "name": "Festival de Comida",
    "location": "Plaza del Centro, París",
    "date": "2023-12-08",
    "topics": ["Comida", "Culinaria", "Degustación"],
    "description": "El Festival de Comida en la Plaza del Centro de París es una celebración de la gastronomía internacional. Prueba deliciosos platos de todo el mundo, con opciones que van desde la comida callejera hasta la alta cocina. Este festival es una experiencia culinaria que te llevará a un viaje de sabores.",
    "reasons": [
      { "title": "Diversidad gastronómica", "description": "Descubre una amplia variedad de cocinas y sabores de diferentes culturas culinarias." },
      { "title": "Catas y degustaciones", "description": "Participa en catas de vinos, quesos y otros productos gourmet." },
      { "title": "Ambiente festivo", "description": "Disfruta de música en vivo y entretenimiento mientras saboreas deliciosas comidas." },
      { "title": "Oportunidades de compra", "description": "Adquiere ingredientes exóticos y productos gourmet para llevar a casa." }
    ],
    "includes": [
      { "title": "Acceso al Festival", "description": ["Entrada al festival y acceso a todas las áreas de comida"] },
      { "title": "Cupones de degustación", "description": ["Cupones para probar una variedad de platos y bebidas"] },
      { "title": "Entretenimiento en vivo", "description": ["Actuaciones de música en vivo y espectáculos"] },
      { "title": "Áreas de compras", "description": ["Puestos de venta de ingredientes y productos gourmet"] }
    ],
    "youMustKnow": [
      {
        "title": "Qué llevar",
        "description": ["Apetito y curiosidad por la comida", "Dinero en efectivo para compras adicionales", "Cámara para capturar los deliciosos platos"]
      },
      {
        "title": "Requisitos para participar",
        "description": ["Boleto de entrada", "Respeto por los otros asistentes", "Pasión por la gastronomía"]
      }
    ],
  },
  {
    "id": 5,
    "image": "https://mgtours.com/image/web_images/services/960_1562.jpg",
    "name": "Exposición de Ciencia",
    "location": "Museo de Ciencias, Chicago",
    "date": "2023-08-20",
    "topics": ["Ciencia", "Educación", "Exploración"],
    "description": "La Exposición de Ciencia en el Museo de Ciencias de Chicago es un viaje emocionante al mundo de la ciencia. Explora descubrimientos científicos innovadores, experimentos interactivos y charlas fascinantes. Esta exposición te inspirará a apreciar la maravilla del mundo natural.",
    "reasons": [
      { "title": "Experimentos emocionantes", "description": "Participa en emocionantes experimentos que te mostrarán principios científicos en acción." },
      { "title": "Charlas de expertos", "description": "Escucha a científicos líderes que comparten sus hallazgos y avances en diversas disciplinas." },
      { "title": "Aprendizaje divertido", "description": "Aprende de manera divertida y práctica a través de actividades educativas interactivas." }
    ],
    "includes": [
      { "title": "Entrada a la Exposición", "description": ["Acceso a todas las exhibiciones y actividades de la exposición"] },
      { "title": "Materiales de aprendizaje", "description": ["Materiales educativos y recursos para llevar a casa"] },
      { "title": "Oportunidades de experimentación", "description": ["Participación en experimentos y demostraciones"] },
      { "title": "Interacción con científicos", "description": ["Oportunidad de hablar con científicos y hacer preguntas"] }
    ],
    "youMustKnow": [
      {
        "title": "Qué llevar",
        "description": ["Ropa cómoda y adecuada para caminar y explorar", "Cuaderno y bolígrafos para tomar notas", "Curiosidad y entusiasmo por la ciencia"]
      },
      {
        "title": "Requisitos para participar",
        "description": ["Boleto de entrada", "Respeto por las reglas del museo", "Actitud abierta para aprender y explorar"]
      }
    ]
  },
  {
    "id": 6,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbuuOCxfZaMc-bsG0YK59E7q4VERUgxxVRsdvX3dZ8eTdoa_NVTrMPrtuO7tgu1G4lzqE&usqp=CAU",
    "name": "Festival de Cine Indie",
    "location": "Cinearte, Los Ángeles",
    "date": "2023-07-10",
    "topics": ["Cine", "Arte", "Creatividad"],
    "description": "El Festival de Cine Indie en Cinearte es un evento que celebra el cine independiente y la creatividad artística en la pantalla grande. Experimenta películas únicas, cortometrajes y documentales de cineastas independientes de todo el mundo. Este festival es una ventana al mundo del cine alternativo.",
    "reasons": [
      { "title": "Películas innovadoras", "description": "Disfruta de películas que desafían las convenciones y exploran nuevas formas de narración." },
      { "title": "Interacción con cineastas", "description": "Conoce a cineastas independientes y participa en sesiones de preguntas y respuestas." },
      { "title": "Descubrimiento cinematográfico", "description": "Descubre joyas cinematográficas que no suelen proyectarse en los cines comerciales." }
    ],
    "includes": [
      { "title": "Acceso a proyecciones", "description": ["Entrada a todas las proyecciones de películas"] },
      { "title": "Charlas con cineastas", "description": ["Oportunidad de conversar con directores y creadores"] },
      { "title": "Programa del festival", "description": ["Programa detallado con horarios de proyecciones"] },
      { "title": "Oportunidades de networking", "description": ["Conexiones con otros amantes del cine y profesionales de la industria"] }
    ],
    "youMustKnow": [
      {
        "title": "Qué llevar",
        "description": ["Entusiasmo por el cine independiente", "Cuaderno y bolígrafos para tomar notas", "Agenda para programar tus proyecciones preferidas"]
      },
      {
        "title": "Requisitos para participar",
        "description": ["Boleto de entrada", "Identificación personal", "Respeto por el arte y la creatividad en el cine"]
      }
    ]
  },
  {
    "id": 7,
    "image": "https://www.vero4travel.com/wp-content/uploads/2015/02/DSC_0018.jpg",
    "name": "Maratón de Arte Urbano",
    "location": "Calles de Berlín, Alemania",
    "date": "2023-06-05",
    "topics": ["Arte", "Cultura", "Street Art"],
    "description": "La Maratón de Arte Urbano en las calles de Berlín es un festival de street art que transforma la ciudad en un lienzo gigante. Artistas urbanos de renombre mundial y talentos emergentes pintan murales impresionantes y grafitis creativos en las paredes de la ciudad. Únete a esta experiencia visual única.",
    "reasons": [
      { "title": "Arte efímero", "description": "Presencia la creación de arte que desaparecerá con el tiempo, lo que lo hace aún más especial." },
      { "title": "Recorrido artístico", "description": "Explora los barrios de Berlín a través de un recorrido artístico lleno de sorpresas visuales." },
      { "title": "Cultura urbana", "description": "Sumérgete en la vibrante cultura del arte callejero y la expresión urbana." }
    ],
    "includes": [
      { "title": "Mapa de Grafitis", "description": ["Mapa con ubicaciones de los grafitis y murales"] },
      { "title": "Tours guiados", "description": ["Tours a pie con guías que explican la historia y el contexto de las obras"] },
      { "title": "Oportunidad de participar", "description": ["Espacios designados para que los visitantes dejen su propia marca artística"] },
      { "title": "Arte en vivo", "description": ["Observa a los artistas crear arte en tiempo real"] }
    ],
    "youMustKnow": [
      {
        "title": "Qué llevar",
        "description": ["Cámara o dispositivo para tomar fotos", "Ropa cómoda para caminar y explorar", "Entusiasmo por el arte callejero"]
      },
      {
        "title": "Requisitos para participar",
        "description": ["Respeto por las obras de arte y la propiedad pública", "Actitud abierta y respetuosa hacia los artistas y la cultura urbana"]
      }
    ]
  },
  {
    "id": 8,
    "image": "https://turismo.buenosaires.gob.ar/sites/turismo/files/field/image/interior-feria-del-libro-1500x610.jpg",
    "name": "Feria del Libro",
    "location": "Parque Literario, Buenos Aires",
    "date": "2023-04-17",
    "topics": ["Literatura", "Cultura", "Lectura"],
    "description": "La Feria del Libro en el Parque Literario de Buenos Aires es un paraíso para los amantes de la lectura y la literatura. Descubre una amplia selección de libros de diversos géneros, asiste a presentaciones de autores, y sumérgete en el mundo de las letras. Esta feria es una celebración de la palabra escrita.",
    "reasons": [
      { "title": "Variedad de libros", "description": "Encuentra libros de todos los géneros, desde clásicos hasta autores contemporáneos." },
      { "title": "Charlas con autores", "description": "Conoce a tus autores favoritos y descubre nuevas voces literarias en las sesiones de firma de libros." },
      { "title": "Entorno literario", "description": "Pasea por el parque y disfruta de actividades literarias en un entorno tranquilo y cultural." }
    ],
    "includes": [
      { "title": "Entrada a la Feria", "description": ["Acceso a la Feria del Libro y a todas las actividades literarias"] },
      { "title": "Programa de eventos", "description": ["Programa detallado con horarios de charlas y presentaciones"] },
      { "title": "Oportunidades de firma de libros", "description": ["Conoce a tus autores favoritos y obtén sus firmas"] },
      { "title": "Puestos de comida y bebida", "description": ["Disfruta de aperitivos y bebidas mientras lees"] }
    ],
    "youMustKnow": [
      {
        "title": "Qué llevar",
        "description": ["Lista de libros que deseas comprar", "Bolso o mochila para llevar tus compras", "Ganas de explorar y descubrir nuevos autores"]
      },
      {
        "title": "Requisitos para participar",
        "description": ["Boleto de entrada", "Respeto por los autores y otros visitantes", "Amor por la literatura"]
      }
    ]
  },
]

const  createEventRepository  = () =>{
  const events = eventList;

  function addEvent(event) {
    events.push(event);
  }

  function getAllEvents() {
    return events;
  }

  function getEventById(id) {
    return events.find((event) => event.id == id);
  }

  function updateEventById(id, updatedEvent) {
    const index = events.findIndex((event) => event.id === id);
    if (index !== -1) {
      events[index] = updatedEvent;
      return true; // Éxito
    }
    return false; // No se encontró el evento
  }

  function deleteEventById(id) {
    const index = events.findIndex((event) => event.id === id);
    if (index !== -1) {
      events.splice(index, 1);
      return true; // Éxito
    }
    return false; // No se encontró el evento
  }

  return {
    addEvent,
    getAllEvents,
    getEventById,
    updateEventById,
    deleteEventById,
  };
}

export default createEventRepository ;
