const usuarioCtrl = {}

const Usuario = require('../models/Usuario')

// Metodo GET -> obtiene todos los usuarios y los devuelve como un json
usuarioCtrl.obtenerUsuarios = async(req, res) =>{
    const usuarios = await Usuario.find()
    res.json(usuarios)
}

// Metodo POST
usuarioCtrl.crearUsuario = async(req, res) =>{
    //Hago una desestructuracion del cuerpo que viene por parte del cliente
    const {nombre, apellido, correo, telefono, edad} = req.body;
    const newUsuario = new Usuario({
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        telefono: telefono,
        edad: edad
    })
    // Estamos almacenando el nuevo usuario
    await newUsuario.save();
    res.json({message: "El usuario ha sido creado"})
}

// Metodo GET de UN solo usuario
usuarioCtrl.obtenerUsuario = async(req, res) =>{
     const usuario = await Usuario.findById(req.params.id)
     res.json(usuario)
}

// Metodo DELETE
usuarioCtrl.eliminarUsuario = async(req, res) =>{
    await Usuario.findByIdAndDelete(req.params.id)
    res.json({message: "Usuario ha sido eliminado"})
}

// Metodo PUT
usuarioCtrl.modificarUsuario = async(req, res) =>{
    const {nombre, apellido, correo, telefono, edad} = req.body;
    await Usuario.findByIdAndUpdate(req.params.id, {
        nombre,
        apellido,
        correo,
        telefono,
        edad
    })
    res.json({message: "El usuario ha sido actualizado"})
}

module.exports = usuarioCtrl