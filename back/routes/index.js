const Express = require('express');
const app = Express();

// Rutas

const usuarioRoutes = require('./usuario-routes');
const authRoutes = require('./auth-routes');
//const localidadRoutes = require('./localidad-routes')
const eventRoutes = require('./event-routes')
//const postRoutes = require('./post-routes')


// use

app.use('/auth', authRoutes);
app.use('/usuarios', usuarioRoutes);
app.use('/events', eventRoutes);


module.exports = app;
