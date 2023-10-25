const Express = require('express');
const app = Express();

// Rutas
const usuarioRoutes = require('./usuario-routes');
const eventRoutes = require('./event-routes');
const activityRoutes = require('./activity-routes');
const authRoutes = require('./auth-routes');

// use
app.use('/auth', authRoutes);
app.use('/usuarios', usuarioRoutes);
app.use('/events', eventRoutes);
app.use('/activities', activityRoutes);


module.exports = app;
