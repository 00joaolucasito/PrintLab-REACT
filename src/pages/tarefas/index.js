import { Link } from 'react-router-dom';
import './index.scss';


export default function Tarefas() {

  return (
    <div className="pagina-lista-tarefa">
      <div className='container'>
        <h1> Lista de Tarefas </h1>
        <div>
          Adicionar tarefa: <input type='text' />
          <button> Adicionar </button>
        </div>
        <div>
          <ul>
            <li> Item 1 </li>
            <li> Item 2 </li>
            <li> Item 3 </li>
            <li> Item 2 </li>
            <li> Item 3 </li>
            <li> Item 1 </li>
            <li> Item 2 </li>
            <li> Item 3 </li> 
          </ul>
        </div>
      </div>

      <Link className='voltar' to='/'> Voltar para Menu </Link>
    </div>
  )
}