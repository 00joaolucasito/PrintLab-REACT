import './index.scss';
import Cabecalho from '../../components/cabecalho/Cabecalho';
import Login from '../../components/Login/Login';
import Cadastro from '../../components/cadastro/Cadastro';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {

  return (
    <div className="Home">
      <Cabecalho/>
      <h1> Home </h1>
      <nav className='menu'>
      <Link  to='/contato'> Contato </Link>
      <Link  to='/tarefas'> Tarefas </Link>
      <Link to='/listar'> Consultar </Link>
      <Link to='/inserir'> Inserir </Link>
      <Link to='/loginpg'>Login</Link>
      </nav>
    </div>
  );
}

