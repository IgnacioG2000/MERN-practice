// Libreria especifica
const {Router} = require('express')
const router = Router()

// Estructura que vamos a utilizar para las peticiones

router.route('/')

    .get()
    .post()

router.route('/:id')

    .get()
    .delete()
    .put()

// De esta manera podemos utilizar el archivo en otra parte del proyecto
module.exports = router;