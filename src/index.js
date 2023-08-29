import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Contato from './pages/contato';
import Tarefas from './pages/tarefas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contato' element={<Contato/>}/>
        <Route path='/tarefas' element={<Tarefas/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

