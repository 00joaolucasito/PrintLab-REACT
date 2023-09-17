import './index.scss';
import DivConsulta from '../../components/div-consulta';


export default function Consulta(){

    return(
        <div className='page'>
            <div className='title'> <h1> <img src='/assets/images/ceta.png' alt=''/> Voltar á tela inicial </h1> 
            
            <h1>Resultados</h1>
            <p>Resultados com base em seu código SKU </p>
            </div>

            <DivConsulta nome='Oficial Creality Ender 3 3D' preco='R$ 4200' sku='#1234' cod='' date='12/11/2023' cat='' ncm='' est=''/>

        </div>
    )
}