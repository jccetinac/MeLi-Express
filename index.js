
// importa express el router y bodyParser
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./network/routes');
const cors = require('cors');


//const response = require('./network/response');


// inicia la aplicacion express  y le añade router y parser
var app = express();
app.use(bodyParser.json());

router(app);

//servir estaticos
app.use('/app', express.static('public'));
app.use(cors());



app.listen(4200);

console.log('la app escucha en http://localhost:4200');