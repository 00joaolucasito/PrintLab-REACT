import { Link } from 'react-router-dom';
import './index.scss';

function App() {
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

export default App;
