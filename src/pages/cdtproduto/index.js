import React, { useState } from 'react';
import './CadastroProdutos.scss';

const CadastroProdutos = () => {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Adicione a lógica para enviar os dados do produto aqui
    const novoProduto = {
      nome,
      preco,
      descricao,
    };
    console.log('Novo produto:', novoProduto);

    // Limpe os campos após o envio
    setNome('');
    setPreco('');
    setDescricao('');
  };

  return (
    <div className="cadastro-produtos">
      <h2>Cadastro de Produtos</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome do Produto:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="preco">Preço:</label>
          <input
            type="text"
            id="preco"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="descricao">Descrição:</label>
          <textarea
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroProdutos;
