const {Schema, model} = require('mongoose')

const usuarioSchema = new Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    telefono: Number,
    correo: String
},
{
    // Por esta propiedad, podemos almacenar de forma automatica de cuando se creo el documento y cuando fue
    // la ultima vez que se actualizo este documento
    timestamps: true
})

// Quiero que los modelos de usuario me los crees asi
module.exports = model('Usuario', usuarioSchema)