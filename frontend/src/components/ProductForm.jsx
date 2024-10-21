import React, { useState, useEffect } from "react";
import axios from "axios"; 

const ProductForm = ({ addProduct }) => {
    const [formData, setFormData] = useState({
        nome: "",
        descricao: "",
        preco: "",
        estoque: "",
        imagem: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(formData); 
        setFormData({
            nome: "",
            descricao: "",
            preco: "",
            estoque: "",
            imagem: "",
        });
    };

    return (
        <div className="product-form">
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
        </div>
    );
};

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8800') 
            .then((response) => {
                setProducts(response.data); 
            })
            .catch((error) => {
                console.error("Erro ao buscar produtos:", error);
            });
    }, []);

    const addProduct = (newProduct) => {
        axios
            .post("http://localhost:8800", newProduct) // Envia o produto para o backend
            .then((response) => {
                setProducts([...products, response.data]); // Atualiza a lista local com o novo produto adicionado
            })
            .catch((error) => {
                console.error("Erro ao adicionar produto:", error);
            });
    };

  return (
    <>
    <div className="products-heading">
      <h1>Adicionar Produto</h1>
      <ProductForm addProduct={addProduct} />

      <h2>Lista de Produtos</h2>
      <div className="products-container">
        {products.length === 0 ? (
                <p>Nenhum produto adicionado.</p>
              ) : (
                products.map((product, index) => (
                  <div key={index}>                    
                    <img src={product.imagem} alt={product.nome} width="100" />
                    <h3>{product.nome}</h3>
                    <p>ID: {product.id}</p>
                    <p>Descrição: {product.descricao}</p>
                    <p>Preço: R$ {product.preco}</p>
                  </div>
                ))
              )}
      </div>
      
    </div>
      
    </>
  );
};

export default Products;
