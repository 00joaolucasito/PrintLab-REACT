import './index.scss';


export default function Cabecalho() {

  return (
    <header>
    <div class="cima">
      <img className="imglogo"  src='/assets/images/printloba.png' alt="" />
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
        <a class="opa">
        <img className="imgcar" src='/assets/images/carro.png' />
    </a>
    </div>
    </div>
</header>
  )
}  