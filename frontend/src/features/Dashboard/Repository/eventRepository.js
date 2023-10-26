const eventList = [
  {
    "id": 1,
    "image": "https://images.rove.me/w_1920,q_85/t12xwzzwojizcdls68ny/new-york-picnic-season-in-central-park.jpg",
    "name": "Festival de Música",
    "location": "Central Park, Nueva York",
    "date": "2023-10-15",
    "topics": ["Música", "Festival", "Entretenimiento"]
  },
  {
    "id": 2,
    "image": "https://www.transmedia.cl/wp-content/uploads/2018/11/samsunginfinitymuesa.png",
    "name": "Conferencia de Tecnología",
    "location": "Centro de Convenciones, San Francisco",
    "date": "2023-11-05",
    "topics": ["Tecnología", "Innovación", "Networking"]
  },
  {
    "id": 3,
    "image": "https://lh3.googleusercontent.com/ci/ALr3YSEYPAerYGC8H1VnV9-qakuGhaTMGTuTPPgbKp9aQBgWxXPVjY4PuUHLNX8tFqFkHTYJcDxVtQ=s1200",
    "name": "Exposición de Arte",
    "location": "Museo Metropolitano, Londres",
    "date": "2023-09-25",
    "topics": ["Arte", "Cultura", "Galería"]
  },
  {
    "id": 4,
    "image": "https://img.remediosdigitales.com/3d8650/los-mejores-mercadillos-de-navidad-de-paris/450_1000.jpg",
    "name": "Festival de Comida",
    "location": "Plaza del Centro, París",
    "date": "2023-12-08",
    "topics": ["Comida", "Culinaria", "Degustación"]
  }
]

const  createEventRepository = () =>{
  const events = eventList;

  function addEvent(event) {
    events.push(event);
  }

  function getAllEvents() {
    return events;
  }

  function getEventById(id) {
    return events.find((event) => event.id === id);
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

export default createEventRepository;
