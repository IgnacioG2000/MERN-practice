// Libreria especifica
const {Router} = require('express')
const router = Router()

const {obtenerUsuarios, crearUsuario, obtenerUsuario, eliminarUsuario, modificarUsuario} = require('../controller/usuario.controller');

// Estructura que vamos a utilizar para las peticiones

router.route('/')

    .get(obtenerUsuarios)
    .post(crearUsuario)

router.route('/:id')

    .get(obtenerUsuario)
    .delete(eliminarUsuario)
    .put(modificarUsuario)

// De esta manera podemos utilizar el archivo en otra parte del proyecto
module.exports = router;