require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require('cors');

const swaggerUI = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc')

const apiBaseUrl = process.env.API_BASE_URL || 'http://localhost:4001';

const swaggerSpec = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API Documentation',
      version: '1.0.0'
    },
    servers: [
      {url: apiBaseUrl}
    ]
  },
  apis: ['./docs/**/*.yaml'],
}
const swaggerOptions = {
  swaggerDefinition: swaggerSpec.definition,
  apis: ['./docs/**/*.yaml'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);


// Rutes:
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 8080
const server = app.listen(PORT, ()=> console.log("Server up on port " + PORT))

const sess = {
  secret: process.env.SESSION_SECRET || "secret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    sameSite: 'strict',
    secure: true,
  },
};
app.use(cors())
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/documentation', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use('/', routes);
module.exports = app;
