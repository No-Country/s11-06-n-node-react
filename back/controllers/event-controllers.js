const Events = require("../models/event.model");
require('dotenv').config();

// Obtener todos los eventos
const getEvents = async (req, res) => {
    try {
        const events = await Events.find();
        res.status(200).send(events);
    } catch (error) {
        res.status(500).send({ error: "Error interno del servidor" });
    }
}

// Obtener un evento por ID
const getEventById = async (req, res) => {
    try {
        const id = req.params.id;
        const events = await Events.findById(id);
        if (!events) {
            return res.status(404).send({ error: "Evento no encontrado" });
        }
        res.status(200).send(events);
    } catch (error) {
        res.status(500).send({ error: "Error interno del servidor" });
    }
}

// Agregar un nuevo evento
const createEvent = async (req, res) => {
    try {
        const newEvent = {
            name: req.body.name,
            date: req.body.date,
            category: req.body.category,
            locationLat: req.body.locationLat,
            locationLong: req.body.locationLong,
            image: req.body.image
        }
        const event = await Events.create(newEvent);
        res.status(201).send({ mensaje: "Evento agregado exitosamente", idEvent: event._id });
    } catch (error) {
        res.status(400).send({ error: "Solicitud incorrecta" });
    }
}

// Eliminar un evento
const deleteEvent = async (req, res) => {
    const id = req.params.id;
    try {
        const event = await Events.findByIdAndDelete(id);
        if (!event) {
            return res.status(404).send({ error: "Evento no encontrado" });
        }
        res.status(200).send({ mensaje: "Evento eliminado exitosamente" });
    } catch (error) {
        res.status(500).send({ error: "Error interno del servidor" });
    }
}

// Modificar un evento
const editEvent = async (req, res) => {
    const id = req.params.id;
    const newEventData = {
        name: req.body.name,
        date: req.body.date,
        category: req.body.category,
        locationLat: req.body.locationLat,
        locationLong: req.body.locationLong,
        image: req.body.image
    }
    try {
        const updatedEvent = await Events.findByIdAndUpdate(id, newEventData, { new: true });
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