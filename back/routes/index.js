const Express = require('express');
const app = Express();

// Rutas

const userRoutes = require('./user-routes');
const eventRoutes = require('./event-routes');
const authRoutes = require('./auth-routes');
const groupRoutes = require('./group-routes');
const chatRoutes = require('./chat-routes')

const newsRoutes = require('./news-routes')


// use
app.use('/auth', authRoutes);
app.use('/groups', groupRoutes);
app.use('/users', userRoutes);
app.use('/events', eventRoutes);
app.use('/news', newsRoutes)
app.use('/chat', chatRoutes)
module.exports = app;