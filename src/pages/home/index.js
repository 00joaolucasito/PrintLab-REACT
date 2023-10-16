import { Link } from 'react-router-dom';
import './index.scss';
import Cabecalho from '../../components/cabecalho/Cabecalho';
import DivHome from '../../components/divHome';
import Creality from '../../components/creality';
import Rodape from '../../components/rodape';


export default function Home() {
  return (
    <div className='home'>


            <Cabecalho/>
            <div className='fundo'></div>
            <div className='home'>
            <DivHome pos="pos1" img='/assets/images/l1.png' title='Impressoras 3D' texto='Dê vida às suas ideias com precisão e criatividade. Impressoras 3D de última geração, disponíveis agora para transformar sua imaginação em realidade.' />
            <DivHome pos="pos2" img='/assets/images/l2.png' title='Filamentos' texto='Desperte sua criatividade tridimensional com o filamento perfeito para suas impressões 3D. Qualidade e precisão que transformam ideias em realidade.' />
            <DivHome pos="pos1" img='/assets/images/l3.png' title='Impressões' texto='Descubra a magia da impressão tridimensional e adquira peças exclusivas que vão encantar e surpreender você. Utilizamos filamentos sustentáveis feitos de materiais reciclados.' />
            </div>

        <div className='cont2'>
          <div> <h1>O que são Impressoras 3D?</h1> </div>
          <div> <p>Uma impressora 3D é uma máquina revolucionária que permite criar objetos tridimensionais a partir de um modelo digital. Ela utiliza uma variedade de materiais, como plástico, resina, metal ou até mesmo alimentos, para construir camadas sucessivas e criar a forma desejada. Esses materiais são aquecidos e depositados em camadas finas, seguindo as especificações do modelo digital, até que o objeto seja completamente formado. Com a impressora 3D, é possível materializar praticamente qualquer coisa, desde pequenos acessórios até peças complexas e funcionais, abrindo um mundo de possibilidades criativas e práticas.</p> </div>
          <div className='duvida'> <p>Alguma dúvida? Nos contate enviando um e-mail !</p> </div>
        </div>

        <Creality/>

        <Rodape/>

      </div>
  );
}


