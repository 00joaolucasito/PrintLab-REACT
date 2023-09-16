import './index.scss';
import Cabecalho from '../../components/cabecalho/Cabecalho';
import Login from '../../components/Login/Login';
import Cadastro from '../../components/cadastro/Cadastro';
import Imagen from '../../components/imagen/Imagen'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Loginpg() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

const handleAuthentication = () => {
  // Lógica de autenticação aqui
  // Define isAuthenticated como true se a autenticação for bem-sucedida
  setIsAuthenticated(true);
}
    return (
      <div className="Loginpg">
        <Cabecalho/>
        <Imagen/>
        {isAuthenticated ? (
        <p>Usuário autenticado!</p>
      ) : (
        <div>
          <Login />
        </div>
      )}
      <button onClick={handleAuthentication}>
        Autenticar
      </button>
      <Link className='voltar' to='/'> Voltar para Menu </Link>
      </div>
    );
  }