const Events = require("../models/event.model");

const getAllEvents = async () => {
    return Events.find();
}

const getEventById = async (id) => {
    return Events.findById(id);
}

const createEvent = async (newEvent) => {
    return Events.create(newEvent);
}

const deleteEvent = async (id) => {
    return Events.findByIdAndDelete(id);
}

const editEvent = async (id, newEventData) => {
    return Events.findByIdAndUpdate(id, newEventData, { new: true });
}

module.exports = {
    getAllEvents,
    getEventById,
    createEvent,
    deleteEvent,
    editEvent
}