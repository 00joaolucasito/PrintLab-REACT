import './index.scss';

export default function Cabecalho(){

return(
        <div className='comp-cabecalho'>
        <div className='parte1'>
            <div className='icon'> <img src='assets/images/printloba.png' alt=''/> </div>

            <div className='opcoes1'> 
            <div className='inpu'>
                 <input placeholder='Pesquisar'/> <div className='caixa'> <img src='assets/images/lupa.png' alt=''/> </div> 
                 </div> 
            <div> <a>Categorias <img src='assets/images/setac.png' alt=''/> </a> <a>Ofertas Diárias</a> <a>Histórico</a> <a>E-mail</a> <a>Sobre</a> </div> 
            </div>
        </div>

        <div className='parte2'> <div> <button>Criar Conta</button> <button>Login</button>  </div>
        <div> <a>CEP</a> <a>Compras</a> <a> <img src='assets/images/carrinho.png' alt=''/> </a> </div> </div>

        </div>
    );
}