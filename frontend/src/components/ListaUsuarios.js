import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ListaUsuarios = () => {

    // Mostrar usuarios //

    // useState([]) = inicializar el estado
    // [] = valor inicial del estado
    const [usuarios, setUsuarios] = React.useState([]);

    // useEffect = hook para realizar peticiones asincronas
    useEffect(() => {
        // Funcion asincrona para obtener los usuarios -> peticion get a la ruta de los usuarios
        // setUsuarios(response.data) = actualizar el estado con los datos de la peticion
        //
        const getUsuarios = async () => {
            const response = await axios.get('http://localhost:4000/api/usuarios');
            setUsuarios(response.data);
        }
        getUsuarios();
    }, [usuarios])

    // Eliminar usuario
    const eliminarUsuario = async(id) => {
        await axios.delete('http://localhost:4000/api/usuarios/' + id);
    }



    return (
      <div className="row">
        {usuarios.map((usuario) => (
          <div className="col-md-4 p-2" key={usuario._id}>
            <div className="card">
              <div className="card-header">
                <h5>Nombre: {usuario.nombre}</h5>
              </div>
              <div className="card-body">
                <p>Apellido: {usuario.apellido}</p>
                <p>Edad: {usuario.edad}</p>
                <p>Teléfono: {usuario.telefono}</p>
                <p>Correo: {usuario.correo}</p>
              </div>

              <div className="card-footer">
                <button className="btn btn-danger" onClick={()=> eliminarUsuario(usuario._id)}>Eliminar</button>

                <Link className='btn btn-primary m-1' to={'/edicionUsuario/' + usuario._id}>
                  Editar
                </Link>
              </div>

            </div>


          </div>
        ))}
      </div>
    );
};

export default ListaUsuarios;
