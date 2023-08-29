import { Link } from 'react-router-dom';
import './index.scss';

export default function Home() {
  return (
    <div className="App">
      <h1> Home </h1>

      <nav className='menu'>
      <Link  to='/contato'> Contato </Link>
      <Link  to='/tarefas'> Tarefas </Link>
      </nav>
    </div>
  );
}


