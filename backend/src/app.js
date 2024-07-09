//Declaro express que es lo que instale por dependencia
const express = require('express')

//Declaro cors que es lo que instale por dependencia
const cors = require('cors')

//Va a almacenar lo que nosotros ya estamos requiriendo de Express
const app = express();

//--------------------------------------//

//--------------Configuracion------------//

// Seteamos la APP a un puerto de la variable de entorno. Si no tiene asignado un puerto, le asigna el puerto 4000
app.set('port', process.env.PORT || 4000)

//Middlewares: funcionalidades a traves de los modulos que estamos utilizando que antes que ejecuten
// las rutas, pase por los middlewares y permita que las peticiones pase a las rutas

// De esta forma estamos utilizando el middleware de cors -> permitimos que el servidor pueda hacer consultas
app.use(cors())

// Cuando nosotros esperemos respuesta de nuestro backend, nos envie un json
app.use(express.json())

// Rutas

// El "/" es mi home, es la pantalla principal, recibe una funcion lambda con los parametros req y res
// (request y response respectivamente) y le devuelve el texto
app.get('/', (req, res)=> {
    res.send('Bienvenido a mi API REST FULL');
})


// Este archivo de app lo exporta para que en otros lugares lo podamos usar
module.exports = app