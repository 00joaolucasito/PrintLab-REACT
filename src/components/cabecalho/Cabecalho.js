import './index.scss';
import { Link } from 'react-router-dom';

export default function Cabecalho() {

  return (
    <header>
      <div className='Renn'>
    <div class="cima">
      <img className="imglogo"  src='/assets/images/printloba.png' alt="" />
      <input type="text" placeholder="Pesquisar" class="inputpesquisa" 
      />  
      <nav className='cima'>
        <Link to='/cadastro' className='butcr'>Criar conta</Link>
        <Link to='/loginpg' className='butcr'>Login</Link>
      </nav>
    </div>
    <div class="baixo">
      <nav className='baixo'>
        <Link to="/" className="pto">Categorias</Link>
        <Link to="/" className="pto">Ofertas Diárias</Link>
        <Link to="/" className="pto">Histórico</Link>
        <Link to="/" className="pto">E-mail</Link>
        <Link to="/" className="pto">Sobre nós</Link>
      </nav> 
        <div class="car">
        <a class="opa">
        <img className="imgcar" src='/assets/images/carro.png' />
    </a>
    </div>
    </div>

    </div>
</header>
  )
}  