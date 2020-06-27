
require('./config/config');

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const bodyParser= require('body-parser');

// para parsear parametros a json.
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Middleware de usuarios
app.use( require('./routes/usuarios'));

// Inicializacion.
app.listen(port, () => {
    console.log(`Escuchando en el puerto: ${ port}`)
})


