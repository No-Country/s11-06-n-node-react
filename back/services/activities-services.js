const Activities = require("../models/activity.model");

const getAllActivities = async () => {
    try {
        const activities = await Activities.find();
        return activities;
    } catch (error) {
        console.error("Error en getAllActivities:", error);
        throw new Error("Error al recuperar eventos");
    }
}

const getActivityById = async (id) => {
    try {
        const event = await Activities.findById(id);
        return event;
    } catch (error) {
        console.error("Error en getActivityById:", error);
        throw new Error("Error al recuperar el evento");
    }
}

const createActivity = async (newActivity) => {
    try {
        const event = await Activities.create(newActivity);
        return event;
    } catch (error) {
        console.error("Error en createActivity:", error);
        throw new Error("Error al crear el evento");
    }
}

const deleteActivity = async (id) => {
    try {
        const event = await Activities.findByIdAndDelete(id);
        return event;
    } catch (error) {
        console.error("Error en deleteActivity:", error);
        throw new Error("Error al eliminar el evento");
    }
}

const editActivity = async (id, newActivityData) => {
    try {
        const updatedActivity = await Activities.findByIdAndUpdate(id, newActivityData, { new: true });
        return updatedActivity;
    } catch (error) {
        console.error("Error en editActivity:", error);
        throw new Error("Error al editar la actividad");
    }
}

module.exports = {
    getAllActivities,
    getActivityById,
    createActivity,
    deleteActivity,
    editActivity
}