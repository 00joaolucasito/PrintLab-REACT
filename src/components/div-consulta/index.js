import './index.scss';


export default function DivConsulta(props){

    return(
        <div className='comp'>
            <div className='image'> <img src='/assets/images/impressora.png' alt=''/> </div>
            <div className='d'> <h3>{props.nome}</h3> <h1>{props.preco}</h1> </div>
            <div className='d'> <p>SKU: {props.sku}</p> <p>Código de Barras: {props.cod}</p> <p>Postado em: {props.date}</p> <p>Categoria: {props.cat}</p> </div>
            <div className='d'> <p>NCM: {props.ncm}</p> <p>Estoque: {props.est}</p> </div>
        </div>
    )
}