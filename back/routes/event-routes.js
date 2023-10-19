const Router = require("express");
const { validateErrors } = require("../middlewares/validateErrors");
const { getEvents, getEventById, createEvent, deleteEvent, editEvent } = require("../controllers/event-controllers");
const { body } = require('express-validator');
const router = Router();

// Rutas 

// Mostrar todos los Eventos
router.get("/", getEvents);

// Mostrar un Evento por ID
router.get("/:id", getEventById);

// Crear un Evento
router.post("/", [
    // Validaciones para la solicitud POST (createEvent)
    body('name').notEmpty().isString(),
    body('date').isISO8601().toDate(),
    body('category').notEmpty().isString(),
    body('locationLat').isNumeric(),
    body('locationLong').isNumeric(),
    body('image').isString(),
], validateErrors, createEvent);

// Eliminar un Evento
router.delete("/:id", deleteEvent);

// Modificar todas las propiedades de un Evento
router.put("/:id", [
    // Validaciones para la solicitud PUT (editEvent)
    body('name').optional().isString(),
    body('date').optional().isISO8601().toDate(),
    body('category').optional().isString(),
    body('locationLat').optional().isNumeric(),
    body('locationLong').optional().isNumeric(),
    body('image').optional().isString(),
], validateErrors, editEvent);

module.exports = router;
