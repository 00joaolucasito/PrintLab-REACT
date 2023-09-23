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
    </div>
  );
};

export default CadastroProdutos;
