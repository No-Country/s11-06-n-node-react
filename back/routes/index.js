const Express = require('express');
const app = Express();

// Rutas

const userRoutes = require('./user-routes');
const eventRoutes = require('./event-routes');
const activityRoutes = require('./activity-routes');
const authRoutes = require('./auth-routes');
const groupRoutes = require('./group-routes');
//const localidadRoutes = require('./localidad-routes')

const newsRoutes = require('./news-routes')
//const postRoutes = require('./post-routes')


// use
app.use('/auth', authRoutes);
app.use('/groups', groupRoutes);
app.use('/users', userRoutes);
app.use('/events', eventRoutes);
<<<<<<< HEAD
app.use('/activities', activityRoutes);
=======
app.use('/news', newsRoutes)
>>>>>>> back-dev

module.exports = app;