import { Link } from 'react-router-dom';
import './index.scss';
import Cabecalho from '../../components/cabecalho';

export default function Home() {
  return (
    <div className="App">
      <Cabecalho/>

      <h1> Home </h1>

      <nav className='menu'>
      <Link  to='/contato'> Contato </Link>
      <Link  to='/tarefas'> Tarefas </Link>
      <Link to='/listar'> Consultar </Link>
      <Link to='/inserir'> Inserir </Link>
      </nav>
    </div>
  );
}


