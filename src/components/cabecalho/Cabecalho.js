import './index.scss';
import { Link } from 'react-router-dom';

export default function Cabecalho() {

  return (
    <header>
    <div class="cima">
      <img className="imglogo"  src='/assets/images/printloba.png' alt="" />
      <input type="text" placeholder="Pesquisar" class="inputpesquisa" 
      />
      <nav className='butcr'>
      <Link  to='/contato'> Criar conta </Link>
      <Link  to='/tarefas'> Login </Link>
      </nav>
    </div>
    <div class="baixo">
        <a href="" class="pto">Categorias</a>
        <a href="" class="pto">Ofertas Diárias</a>
        <a href="" class="pto">Histórico</a>
        <a href="" class="pto">E-mail</a>
        <a href="" class="pto">Sobre nós</a>
        <div class="car">
            <a href="www.google.com" class="opa">
        <img className="imgcar" src='/assets/images/carro.png' />
    </a>
    </div>
    </div>
</header>
  )
}  