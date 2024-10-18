import React, { useState, useEffect } from "react";
import axios from "axios"; // Para enviar requisições ao backend

const ProductForm = ({ addProduct }) => {
  const [formData, setFormData] = useState({
    nome: "",
    descricao: "",
    preco: "",
    estoque: "",
    imagem: "",
  });

  // Função para atualizar o estado dos inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Função para enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(formData); // Chama a função passada como props para adicionar o produto
    setFormData({
      nome: "",
      descricao: "",
      preco: "",
      estoque: "",
      imagem: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nome"
        placeholder="Nome"
        value={formData.nome}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="descricao"
        placeholder="Descrição"
        value={formData.descricao}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="preco"
        placeholder="Preço"
        value={formData.preco}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="estoque"
        placeholder="Estoque"
        value={formData.estoque}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="imagem"
        placeholder="URL da Imagem"
        value={formData.imagem}
        onChange={handleChange}
      />
      <button type="submit">Adicionar Produto</button>
    </form>
  );
};

const Products = () => {
  const [products, setProducts] = useState([]);

  // Função para buscar todos os produtos do backend ao carregar a página
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/produtos") // Ajuste conforme o caminho correto da sua API
      .then((response) => {
        setProducts(response.data); // Atualiza os produtos com os dados vindos do backend
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
      });
  }, []);

  // Função para adicionar um novo produto
  const addProduct = (newProduct) => {
    axios
      .post("http://localhost:5000/api/produtos", newProduct) // Envia o produto para o backend
      .then((response) => {
        setProducts([...products, response.data]); // Atualiza a lista local com o novo produto adicionado
      })
      .catch((error) => {
        console.error("Erro ao adicionar produto:", error);
      });
  };

  return (
    <>
      <h1>Adicionar Produto</h1>
      <ProductForm addProduct={addProduct} />
      <h2>Lista de Produtos</h2>
      {products.length === 0 ? (
        <p>Nenhum produto adicionado.</p>
      ) : (
        products.map((product, index) => (
          <div key={index}>
            <h3>{product.nome}</h3>
            <p>ID: {product.id}</p>
            <p>Descrição: {product.descricao}</p>
            <p>Preço: R$ {product.preco}</p>
            <p>Estoque: {product.estoque}</p>
            <img src={product.imagem} alt={product.nome} width="100" />
          </div>
        ))
      )}
    </>
  );
};

export default Products;