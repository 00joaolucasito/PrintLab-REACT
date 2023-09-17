import './index.scss';


export default function DivHome(props){

    return(
        <div className='comp-div'>
            <div className={props.pos}>
                <div className='imagem'><img src={props.img} alt=''/></div>
                <div className='cont'> <div className='text'> <h1>{props.title}</h1> </div>
                <div className='text2'> <p>{props.texto}</p> </div>
                <div className='botao'> <button> Saiba mais </button> </div>
                </div>
         </div>
        </div>
    )
}