export const createEventRepository = () => {

    const events = [
        {
            "id": 1,
            "image": "evento1.jpg",
            "name": "Festival de Música",
            "location": "Central Park, Nueva York",
            "date": "2023-10-15",
            "topics": ["Música", "Festival", "Entretenimiento"]
        },
        {
            "id": 2,
            "image": "evento2.jpg",
            "name": "Conferencia de Tecnología",
            "location": "Centro de Convenciones, San Francisco",
            "date": "2023-11-05",
            "topics": ["Tecnología", "Innovación", "Networking"]
        },
        {
            "id": 3,
            "image": "evento3.jpg",
            "name": "Exposición de Arte",
            "location": "Museo Metropolitano, Londres",
            "date": "2023-09-25",
            "topics": ["Arte", "Cultura", "Galería"]
        },
        {
            "id": 4,
            "image": "evento4.jpg",
            "name": "Festival de Comida",
            "location": "Plaza del Centro, París",
            "date": "2023-12-08",
            "topics": ["Comida", "Culinaria", "Degustación"]
        }
    ]
  
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
  
  