import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from "react";
import Cabecalho from '../../components/cabecalho/Cabecalho';

import "./index.scss";

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');




  function criar(){
    const r = axios.get('http://localhost:5000/cliente/login', {email: email, senha: senha});

  }

  return (
    <div className="container">
      <Cabecalho/>

      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title"> Bem vindo </span>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                className={senha !== "" ? "has-val input" : "input"}
                type="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn" onClick={criar}>Login</button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui conta? </span>
              <a className="txt2" href="#">
              <a className="login-form-btn"><Link to='/cadastro'><a>Crir conta</a></Link></a>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
