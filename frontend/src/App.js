import './App.css';
import {Routes, Route} from 'react-router-dom';

import Navegacion from './components/Navegacion';
import ListaUsuarios from './components/ListaUsuarios';
import CrearUsuarios from './components/CrearUsuarios';

function App() {
  return (
    <div className="">
      <Navegacion />
      <div className="container p-4">
        <Routes>
          <Route path="/" element={<ListaUsuarios />} />
          <Route path="/creacionUsuario" element={<CrearUsuarios />} />
          <Route path='/edicionUsuario/:id' element={<CrearUsuarios />} />
        </Routes>
        </div>
      </div>
  );
}

export default App;
