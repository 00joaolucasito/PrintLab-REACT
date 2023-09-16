import './index.scss';
import { Link } from 'react-router-dom';

export default function Cabecalho() {
  
  return (
    <header className='comp-cabecalho'>
        <img className='icon' src='/assets/images/printloba.png' alt='' />
          <input
          type="pesquisa"
          />
         <nav>
         <Link  to='/cadastro'>Criar conta</Link>
         <Link  to='/loginpg'>Entrar</Link>
         </nav>
         <div>
        <a>Categorias</a>
        <a>Ofertas diárias</a>
        <a>Histórico</a>
        <a>E-mail</a>
        <a>Sobre</a>
         </div>
    </header>
  )
}