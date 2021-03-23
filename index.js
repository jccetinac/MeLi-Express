
// importa express el router y bodyParser
const express = require('express');
require('dotenv').config();
console.log(process.env);

const bodyParser = require('body-parser');
const router = require('./network/routes');
const cors = require('cors');

var app = express();
app.use(bodyParser.json());

router(app);

app.use('/app', express.static('public'));
app.use(cors());

app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});
