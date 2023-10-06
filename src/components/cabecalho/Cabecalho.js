import './index.scss';
import { Link } from 'react-router-dom';

export default function Cabecalho() {

  return (
    <header>
    <div class="cima">
      <img src="../src/images/1534af0883834ad63654da55f618c624.png" alt="" class="imglogo"/>
      <input type="text" placeholder="Pesquisar" class="inputpesquisa" 
      />
      <button class="butcr">Criar conta</button>
      <button class="butcr">Login</button>
    </div>
    <div class="baixo">
        <a href="" class="pto">Categorias</a>
        <a href="" class="pto">Ofertas Diárias</a>
        <a href="" class="pto">Histórico</a>
        <a href="" class="pto">E-mail</a>
        <a href="" class="pto">Sobre nós</a>
        <div class="car">
            <a href="www.google.com" class="opa">
        <img src="../src/images/qawd-removebg-preview.png" alt="" class="imgcar"/>
    </a>
    </div>
    </div>
</header>
  )
}  