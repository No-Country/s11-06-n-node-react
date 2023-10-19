const Events = require("../models/event.model");
const EventService = require("../services/event.service");

const getEvents = async (req, res) => {
    try {
        const events = await EventService.getAllEvents();
        res.status(200).send(events);
    } catch (error) {
        res.status(500).send({ error: "Error interno del servidor" });
    }
}

const getEventById = async (req, res) => {
    try {
        const id = req.params.id;
        const event = await EventService.getEventById(id);
        if (!event) {
            return res.status(404).send({ error: "Evento no encontrado" });
        }
        res.status(200).send(event);
    } catch (error) {
        res.status(500).send({ error: "Error interno del servidor" });
    }
}

const createEvent = async (req, res) => {
    try {
        const newEvent = req.body;
        const event = await EventService.createEvent(newEvent);
        res.status(201).send({ mensaje: "Evento agregado exitosamente", idEvent: event._id });
    } catch (error) {
        res.status(400).send({ error: "Solicitud incorrecta" });
    }
}

const deleteEvent = async (req, res) => {
    const id = req.params.id;
    try {
        const event = await EventService.deleteEvent(id);
        if (!event) {
            return res.status(404).send({ error: "Evento no encontrado" });
        }
        res.status(200).send({ mensaje: "Evento eliminado exitosamente" });
    } catch (error) {
        res.status(500).send({ error: "Error interno del servidor" });
    }
}

const editEvent = async (req, res) => {
    const id = req.params.id;
    const newEventData = req.body;
    try {
        const updatedEvent = await EventService.editEvent(id, newEventData);
        if (!updatedEvent) {
            return res.status(404).send({ mensaje: "No se encontró el evento" });
        }
        res.status(200).send({ mensaje: "Evento modificado con éxito", evento: updatedEvent });
    } catch (error) {
        res.status(500).send({ error: "Error interno del servidor" });
    }
}

module.exports = {
    getEvents,
    getEventById,
    createEvent,
    deleteEvent,
    editEvent
}
