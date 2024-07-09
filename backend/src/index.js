// Lo ponemos AL PRINCIPIO para que SIEMPRE requiera primero nuestras variables de entorno
require('dotenv').config()

// Traemos la app para poder utilizarlo
const app = require('./app')

require('./database')

//-------------------------------------------//

// Esta logica es para ejecutar el servidor


async function main() {
    await app.listen(app.get('port'))
    console.log('El servidor se esta ejecutando en el puerto: ', app.get('port'));
}

//Invocar a la funcion
main();