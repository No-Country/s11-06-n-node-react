const Express = require('express');

const app = Express();

// Rutas
const usuarioRoutes = require('./usuario-routes');
const categoriaRoutes = require('./categoria-routes');
//const localidadRoutes = require('./localidad-routes')
//const eventoRoutes = require('./evento-routes')
//const postRoutes = require('./post-routes')


// use
app.use('/usuarios', usuarioRoutes);
app.use('/categorias', categoriaRoutes);
//app.use('/localidades', localidadRoutes);
//app.use('/eventos', eventoRoutes);
//app.use('/posts', postRoutes);


module.exports = app;
