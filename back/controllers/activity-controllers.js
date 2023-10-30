const Activities = require("../models/activity.model");
const ActivityService = require("../services/activities-services");

const getActivities = async (req, res) => {
    try {
        const activities = await ActivityService.getAllActivities();
        res.status(200).send(activities);
    } catch (error) {
        console.error("Error en getActivitiess:", error);
        res.status(500).send({ error: "Error interno del servidor" });
    }
}

const getActivityById = async (req, res) => {
    try {
        const id = req.params.id;
        const activitie = await ActivityService.getActivityById(id);
        if (!activitie) {
            return res.status(404).send({ error: "Actividad no encontrada" });
        }
        res.status(200).send(activitie);
    } catch (error) {
        console.error("Error en getActivityById:", error);
        res.status(500).send({ error: "Error interno del servidor" });
    }
}

const createActivity = async (req, res) => {
    try {
        const newActivity = req.body;
        const activitie = await ActivityService.createActivity(newActivity);
        res.status(201).send({ mensaje: "Actividad agregada exitosamente", idActivity: activitie._id });
    } catch (error) {
        console.error("Error en createActivity:", error);
        res.status(400).send({ error: "Solicitud incorrecta" });
    }
}

const deleteActivity = async (req, res) => {
    const id = req.params.id;
    try {
        const activitie = await ActivityService.deleteActivity(id);
        if (!activitie) {
            return res.status(404).send({ error: "Actividad no encontrada" });
        }
        res.status(200).send({ mensaje: "Actividad eliminada exitosamente" });
    } catch (error) {
        console.error("Error en deleteActivity:", error);
        res.status(500).send({ error: "Error interno del servidor" });
    }
}

const editActivity = async (req, res) => {
    const id = req.params.id;
    const newActivityData = req.body;
    try {
        const updatedActivity = await ActivityService.editActivity(id, newActivityData);
        if (!updatedActivity) {
            return res.status(404).send({ mensaje: "No se encontró la actividad" });
        }
        res.status(200).send({ mensaje: "Actividad modificada con éxito", actividad: updatedActivity });
    } catch (error) {
        console.error("Error en editActivity:", error);
        res.status(500).send({ error: "Error interno del servidor" });
    }
}

module.exports = {
    getActivities,
    getActivityById,
    createActivity,
    deleteActivity,
    editActivity
}
