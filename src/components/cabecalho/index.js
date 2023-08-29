import './index.scss';

export default function Cabecalho(){

    return(
        <div className='comp-cabecalho'>
        <div className='parte1'>
            <div></div>

            <div className='opcoes1'> <div className='inpu'> <input placeholder='Pesquisar'/> <div className='caixa'></div> </div> 
            <div> <a>Categorias</a> <a>Ofertas Diárias</a> <a>Histórico</a> <a>E-mail</a> <a>Sobre</a> </div> </div>
        </div>

        <div className='parte2'> <div> <button>Criar Conta</button> <button>Login</button>  </div>
        <div> <a>CEP</a> <a>Compras</a> <a></a> </div> </div>

        </div>
    )
}