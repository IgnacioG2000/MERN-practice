import React from 'react';
// axios es una biblioteca de JavaScript utilizada para hacer solicitudes HTTP desde el navegador y Node.js. 
//Es útil para interactuar con APIs, recuperar datos de servidores y enviar datos a servidores.
import axios from 'axios';

const CrearUsuarios = () => {

    const valorInicial = {
        nombre: '',
        apellido: '',
        edad: 18,
        telefono: 0,
        correo: ''
    }

    // Crear estado
    // usuario = estado
    // setUsuario = funcion para actualizar el estado
    // useState(valorInicial) = inicializar el estado
    const [usuario, setUsuario] = React.useState(valorInicial);

    // Capturar datos de los inputs
    // e = evento
    // name = nombre del input
    // value = valor del input
    // setUsuario = funcion para actualizar el estado
    // ...usuario = copia del estado actual
    // [name]: value = actualiza el valor del input
    const capturarDatos = (e) => {
        const {name, value} = e.target;
        setUsuario({...usuario, [name]: value});
    }

    const guardarDatos = async(e) => {
        // Evitar que se recargue la pagina
        e.preventDefault();
        //console.log(usuario);

        // Enviar los datos al backend
        const nuevoUsuario = {
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            edad: usuario.edad,
            telefono: usuario.telefono,
            correo: usuario.correo
        }

        await axios.post('http://localhost:4000/api/usuarios', nuevoUsuario);


        // Limpiar los inputs
        setUsuario({...valorInicial});
    }


    return (
      <div className="col-md-6 offset-md-3">
        <form onSubmit={guardarDatos}>
            <h2 className='text-center mb-3'>Crear Usuario</h2>
          <div className="card card-body">
            <div className="mb-3">
              <label>Nombre</label>

              <input
                type="text"
                className="form-control"
                placeholder="Ingresar el nombre del usuario"
                required
                name='nombre'
                value={usuario.nombre}
                onChange={capturarDatos}
              />
            </div>

            <div className="mb-3">
              <label>Apellido</label>

              <input
                type="text"
                className="form-control"
                placeholder="Ingresar el apellido del usuario"
                required
                name='apellido'
                value={usuario.apellido}
                onChange={capturarDatos}
              />
            </div>

            <div className="mb-3">
              <label>Edad</label>

              <input
                type="number"
                className="form-control"
                placeholder="Ingresar la edad del usuario"
                required
                name='edad'
                value={usuario.edad}
                onChange={capturarDatos}
              />
            </div>

            <div className="mb-3">
              <label>Teléfono</label>

              <input
                type="number"
                className="form-control"
                placeholder="Ingresar el teléfono del usuario"
                required
                name='telefono'
                value={usuario.telefono}
                onChange={capturarDatos}
              />
            </div>

            <div className="mb-3">
              <label>Correo</label>

              <input
                type="text"
                className="form-control"
                placeholder="Ingresar el correo electrónico del usuario"
                required
                name='correo'
                value={usuario.correo}
                onChange={capturarDatos}
              />
            </div>

            <button className="btn btn-primary form-control">Crear Usuario</button>
          </div>
        </form>
      </div>
    );
};

export default CrearUsuarios;