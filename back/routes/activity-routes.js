const express = require("express");
const { validateErrors } = require("../middleware/validateErrors");
const {
    getActivities,
    getActivityById,
    createActivity,
    deleteActivity,
    editActivity
} = require("../controllers/activity-controllers");
const { body } = require('express-validator');

const router = express.Router();

// Ruta para mostrar todas las actividades
router.get("/", getActivities);

// Ruta para mostrar una actividad por ID
router.get("/:id", getActivityById);

// Ruta para crear una actividad
router.post("/",
    [
        // Validaciones para la solicitud POST (createActivity)
        body('name').notEmpty().isString(),
        body('date').isISO8601().toDate(),
        body('image').isString(),
    ],
    validateErrors,
    createActivity
);

// Ruta para eliminar una actividad
router.delete("/:id", deleteActivity);

// Ruta para modificar todas las propiedades de una actividad
router.put("/:id",
    [
        // Validaciones para la solicitud PUT (editActivity)
        body('name').optional().isString(),
        body('date').optional().isISO8601().toDate(),
        body('image').optional().isString(),
    ],
    validateErrors,
    editActivity
);

module.exports = router;
