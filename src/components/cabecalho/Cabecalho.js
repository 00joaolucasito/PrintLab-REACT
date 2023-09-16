import './index.scss';
import { Link } from 'react-router-dom';

export default function Cabecalho() {
  
  return (
    <header className='comp-cabecalho'>
      <nav>
        <img className='logo' src='/assets/images/printloba.png' alt='' />
          <input
          type="pesquisa"
          />
        <div className='mobile-menu'>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
        </div>
        <ul className='nav-list'>
        <Link to='/cadastro'><a> Criar conta</a></Link>
        <Link  to='/loginpg'><a>Entrar</a></Link>
        <Link to='/'><a>Categorias</a></Link>
        <Link to='/'><a>Ofertas diárias</a></Link>
        <Link to='/'><a>Histórico</a></Link>
        <Link to='/'><a>E-mail</a></Link>
        <Link to='/'><a>Sobre</a></Link>
         </ul>
        </nav> 
    </header>
  )
}