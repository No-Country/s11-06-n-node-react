require('dotenv').config();
const setupWebSocket = require('./options/websocket');
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose')
const passport = require('passport')
const {initializePassport} = require('./options/passport.config')
const googleStrategy = require('./options/google')
const cors = require('cors');
const swaggerUI = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc')
const passportUtils = require('./utils/passportUtils')
const apiBaseUrl = process.env.API_BASE_URL || 'http://localhost:8080';
const swaggerSpec = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API Documentation',
      version: '1.0.0'
    },
    servers: [
      {url: "https://s11-06-n-node-react-back.onrender.com/"},
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


mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conexión a MongoDB Atlas establecida con éxito');
}).catch((err) => {
  console.error('Error al conectar a MongoDB Atlas:', err);
});



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

initializePassport();

app.use((req, res, next) => {

  const allowedOrigins = ['http://127.0.0.1:5173', 'http://localhost:5173', 'https://s11-06-n-node-react.vercel.app', 'https://globalmate.vercel.app', 'http://localhost:8080'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, Authorization, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use(session(sess));
app.use(passport.initialize())
app.use(passport.session())
passport.use(googleStrategy)
app.use(express.json());
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}));
app.use('/documentation', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.get('/chats', (req, res) => {
  res.sendFile('public/chat.html', { root: __dirname });
});
app.use('/', routes);

setupWebSocket(server);


module.exports = {app, server};
