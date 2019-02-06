import React from 'react';
import ListaUsuarios from '../containers/lista-usuarios';
import UserDetail from '../containers/descripcion-usuarios';
require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>Lista de Usuarios:</h2>
        <ListaUsuarios></ListaUsuarios>
        <hr />
        <h2>Detalles de Usuarios:</h2>
        <UserDetail />
    </div>
);

export default App;