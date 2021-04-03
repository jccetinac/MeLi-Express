
// importa express el router y bodyParser
const express = require('express');
require('dotenv').config();

const bodyParser = require('body-parser');
const router = require('./network/routes');
const cors = require('cors');

var app = express();
app.use(bodyParser.json());
app.use(cors());

router(app);

app.use('/app', express.static('public'));


app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});
