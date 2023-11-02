const express = require("express");
const { validateErrors } = require("../middleware/validateErrors");
const {
    getEvents,
    getEventById,
    getUserEvents,
    createEvent,
    deleteEvent,
    editEvent
} = require("../controllers/event-controllers");
const { body } = require('express-validator');

const router = express.Router();

// Ruta para mostrar todos los Eventos
router.get("/", getEvents);

// Ruta para mostrar un Evento por ID
router.get("/:id", getEventById);

// Ruta para obtener todos los eventos de un usuario
router.get("/user/:userId", getUserEvents);

// Ruta para crear un Evento
router.post("/",createEvent);

// Ruta para eliminar un Evento
router.delete("/:id", deleteEvent);

// Ruta para modificar todas las propiedades de un Evento
router.put("/:id",
    validateErrors,
    editEvent
);

module.exports = router;
