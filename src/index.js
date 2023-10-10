import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';

import Home from './pages/home';
import Contato from './pages/contato';
import Tarefas from './pages/tarefas';
import Inserir from './pages/inserir';
import Listar from './pages/listar';
import CadastroProduto from './pages/cdtproduto';
import Loginpg from './pages/loginpg';
import Cadastro from './pages/cadastro/Cadastro';
import Produtos from './pages/produtos';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/'             element={<Home/>}/>
        <Route path='/contato'      element={<Contato/>}/>
        <Route path='/tarefas'      element={<Tarefas/>}/>
        <Route path='/inserir'      element={<Inserir />} />
        <Route path='/listar'       element={<Listar />} />
        <Route path='/cdtproduto'   element={< CadastroProduto/>} />
        <Route path='/loginpg'      element={<Loginpg/>}   />
        <Route path='/cadastro'     element={<Cadastro/>}  />
        <Route path='/produtos'    element={<Produtos/>}  />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

