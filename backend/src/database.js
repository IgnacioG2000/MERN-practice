const mongoose = require("mongoose");

// Creamos la cadena de conexion

// Lo que hace es un if que si existe en la variable de entorno utiliza esa (cadena de conexion principal), 
//sino la que le damos nosotros (que es una cadena de conexion alterna)
const URI = process.env.MONGODB_URI
            ? process.env.MONGODB_URI
            : 'mongodb://localhost/dbtest'

mongoose.connect(URI)
const connection = mongoose.connection;



// Cuando se conecte a la DB, que nos tire algo de que verdaderamente se conecto
connection.once('open', ()=>{
    console.log('La base de datos ha sido conectada: ',URI);
})