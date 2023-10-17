const Express = require('express');

const app = Express();

// Rutas
const usuarioRoutes = require('./usuario-routes')
const eventRoutes = require('./event-routes');


app.use('/usuarios', usuarioRoutes);
app.use('/events', eventRoutes);


module.exports = app;
