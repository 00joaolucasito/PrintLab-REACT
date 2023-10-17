import './index.scss';
import Cabecalho from '../../components/cabecalho/Cabecalho';
import Rodape from '../../components/rodape';

export default function Produtos(){

    return(
    <div className='pagina-produtos'>
        <Cabecalho/>
        <div className='main'>
             <div className='lado'>
                <h1>Qualquer categoria</h1>
                <p>Impressoras 3d</p>
                <p>Filamentos</p>
                <p>Resina</p>
                <p>Impressões</p>
            </div>
            <div className='meio'> 

            </div>
        </div>
        <Rodape/>
    </div>
    );
}