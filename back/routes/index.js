const Express = require('express');
const app = Express();

// Rutas

const userRoutes = require('./user-routes');
const eventRoutes = require('./event-routes');
const authRoutes = require('./auth-routes');
//const localidadRoutes = require('./localidad-routes')
const newsRoutes = require('./news-routes')
//const postRoutes = require('./post-routes')


// use
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/events', eventRoutes);
app.use('/news', newsRoutes)

module.exports = app;
