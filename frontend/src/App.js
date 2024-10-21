import { Login, ProductCard, Sucess } from './components';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Home from './Home';
import axios from 'axios';

const App = () => {
  const [products, setProducts] = useState([]);

  // Função para buscar os produtos
  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8800');
      setProducts(response.data.products || response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Componente de detalhes do produto
  const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find((item) => item.id === parseInt(id));

    if (!product) {
      return <div>Produto não encontrado</div>;
    }

    return <ProductCard product={product} />;
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product/:id" element={<ProductDetails />} /> 
      <Route path="/Teste" element={<h1>Teste</h1>} /> 
      <Route path="/sucess" element={<Sucess  />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
};

export default App;
