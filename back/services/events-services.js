const Events = require("../models/event.model");

const getAllEvents = async () => {
    try {
        const events = await Events.find();
        return events;
    } catch (error) {
        console.error("Error en getAllEvents:", error);
        throw new Error("Error al recuperar eventos");
    }
}

const getEventById = async (id) => {
    try {
        const event = await Events.findById(id);
        return event;
    } catch (error) {
        console.error("Error en getEventById:", error);
        throw new Error("Error al recuperar el evento");
    }
}

const getUserEvents = async (userId) => {
    try {
      const userEvents = await Events.find({ user: userId });
      return userEvents;
    } catch (error) {
      console.error("Error en getUserEvents:", error);
      throw new Error("Error al recuperar eventos del usuario");
    }
  }

const createEvent = async (newEvent) => {
    try {
        const event = await Events.create(newEvent);
        return event;
    } catch (error) {
        console.error("Error en createEvent:", error);
        throw new Error("Error al crear el evento");
    }
}

const deleteEvent = async (id) => {
    try {
        const event = await Events.findByIdAndDelete(id);
        return event;
    } catch (error) {
        console.error("Error en deleteEvent:", error);
        throw new Error("Error al eliminar el evento");
    }
}

const editEvent = async (id, newEventData) => {
    try {
        const updatedEvent = await Events.findByIdAndUpdate(id, newEventData, { new: true });
        return updatedEvent;
    } catch (error) {
        console.error("Error en editEvent:", error);
        throw new Error("Error al editar el evento");
    }
}

module.exports = {
    getAllEvents,
    getEventById,
    getUserEvents,
    createEvent,
    deleteEvent,
    editEvent
}