import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeAdm from '../pages/HomeAdm';
import HomeOficina from '../pages/HomeOficina';
import ConsultaAdm from '../pages/ConsultaAdm';
import ConsultaCliente from '../pages/ConsultaCliente';
import CadastroItem from '../pages/CadastroItem';


function Rotas(){

    return(
        <Routes>
            <Route path='/adm' element={<HomeAdm/>} />
            <Route path='/' element={<HomeOficina/>} />
            <Route path='/adm/ordens' element={<ConsultaAdm/>} />
            <Route path='/consultacliente' element={<ConsultaCliente/>} />
            <Route path='/adm/cadastro' element={<CadastroItem/>} />
        </Routes>
    );
}


export default Rotas;