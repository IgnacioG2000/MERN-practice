// Traemos la app para poder utilizarlo
const app = require('./app')

//-------------------------------------------//

// Esta logica es para ejecutar el servidor


async function main() {
    await app.listen(app.get('port'))
    console.log('El servidor se esta ejecutando en el puerto: ', app.get('port'));
}

//Invocar a la funcion
main();