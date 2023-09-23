import { useState } from "react";
import Cabecalho from '../../components/cabecalho/Cabecalho';

import "./index.scss";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <Cabecalho/>

      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Criar</span>

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
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Continuar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;

