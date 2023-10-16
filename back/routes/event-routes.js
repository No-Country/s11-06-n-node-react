const Router = require("express")

const { jwtValidation } = require('../middlewares/jwtValidation')

const {
    getEvents,
    getEventById,
    createEvent,
    deleteEvent,
    editEvent
} = require("../controllers/event-controllers")

const { body } = require('express-validator')
const router = Router()
const { validateErrors } = require("../middlewares/validateErrors")

// Rutas 
//Mostrar todos los Eventos

router.get("/", getEvents) //jwtValidation, 

//Mostrar un Evento por ID
router.get("/:id", getEventById) //, jwtValidation

//Crear un Evento
router.post("/", createEvent)

//Eliminar un Evento
router.delete("/:id", deleteEvent) //jwtValidation, 

//Modificar todas las propiedades de un Evento
router.put("/:id", editEvent)

module.exports = router