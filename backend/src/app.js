//Declaro express que es lo que instale por dependencia
const express = require('express')

//Declaro cors que es lo que instale por dependencia
const cors = require('cors')

//Va a almacenar lo que nosotros ya estamos requiriendo de Express
const app = express();

//--------------------------------------//

//Configuracion

// Seteamos la APP a un puerto de la variable de entorno. Si no tiene asignado un puerto, le asigna el puerto 4000
app.set('port', process.env.PORT || 4000)

// Este archivo de app lo exporta para que en otros lugares lo podamos usar
module.exports = app