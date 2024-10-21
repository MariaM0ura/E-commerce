import React, { useState, useEffect } from "react";
import axios from "axios"; 

const ProductFormEdit = ({ addProduct, updateProduct, editProduct }) => {
  const [formData, setFormData] = useState({
      nome: "",
      descricao: "",
      preco: "",
      estoque: "",
      imagem: "",
  });

  useEffect(() => {
      if (editProduct) {
          setFormData({
              nome: editProduct.nome,
              descricao: editProduct.descricao,
              preco: editProduct.preco,
              estoque: editProduct.estoque,
              imagem: editProduct.imagem,
          });
      }
  }, [editProduct]);

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
          ...formData,
          [name]: value,
      });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      if (editProduct) {
          updateProduct({ ...formData, id: editProduct.id });
      } else {
          addProduct(formData);
      }
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
          <button type="submit">{editProduct ? "Atualizar Produto" : "Adicionar Produto"}</button>
      </form>
    </div>
  );
};


const Products = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
      nome: "",
      descricao: "",
      preco: "",
      estoque: "",
      imagem: "",
  });
  const [editProduct, setEditProduct] = useState(null);

  const fetchProducts = () => {
    axios
        .get('http://localhost:8800')
        .then((response) => {
            setProducts(response.data);
        })
        .catch((error) => {
            console.error("Erro ao buscar produtos:", error);
        });
};

  useEffect(() => {
      axios
          .get('http://localhost:8800')
          .then((response) => {
              setProducts(response.data);
              fetchProducts();
          })
          .catch((error) => {
              console.error("Erro ao buscar produtos:", error);
          });
  }, []);

  const addProduct = (newProduct) => {
      axios
          .post("http://localhost:8800", newProduct)
          .then((response) => {
              setProducts([...products, response.data]);
              fetchProducts();
          })
          .catch((error) => {
              console.error("Erro ao adicionar produto:", error);
          });
  };

  const removeProduct = (id) => {
    axios
        .delete(`http://localhost:8800/${id}`)
        .then(() => {
            setProducts(products.filter((product) => product.id !== id)); // Atualiza a lista local
        })
        .catch((error) => {
            console.error("Erro ao remover produto:", error);
        });
};

  const startEditProduct = (product) => {
      setEditProduct(product);
      setFormData({
          nome: product.nome,
          descricao: product.descricao,
          preco: product.preco,
          estoque: product.estoque,
          imagem: product.imagem,
      });
  };

  const updateProduct = (updatedProduct) => {
    console.log("Atualizando produto:", updatedProduct); // Adicione isso
    axios
        .put(`http://localhost:8800/${updatedProduct.id}`, updatedProduct)
        .then((response) => {
            console.log("Produto atualizado:", response.data); // Adicione isso
            setProducts(
                products.map((product) =>
                    product.id === updatedProduct.id ? response.data : product
                )
            );
            setEditProduct(null);
            setFormData({
                nome: "",
                descricao: "",
                preco: "",
                estoque: "",
                imagem: "",
            });
            fetchProducts();
        })
        .catch((error) => {
            console.error("Erro ao atualizar produto:", error);
        });
};

  return (
      <>
            <div className="products-heading">
              <div className="products-heading">
                <h1>{editProduct ? "Edit Product" : "Add Product"}</h1>
                <ProductFormEdit 
                    addProduct={addProduct} 
                    updateProduct={updateProduct} 
                    editProduct={editProduct} 
                />                
              </div>
          <h2>Product List</h2>
          <div className="products-container">
              {products.length === 0 ? (
                  <p>No products added.</p>
              ) : (
                  products.map((product) => (
                      <div key={product.id}>
                          <img src={product.imagem} alt={product.nome} width="100" />
                          <h3>{product.nome}</h3>
                          <p>ID: {product.id}</p>
                          <p>Description: {product.descricao}</p>
                          <p>Price: R$ {product.preco}</p>
                          <div className="buttons">
                          <button className="add-to-cart" onClick={() => startEditProduct(product)}>Edit</button>
                          <button className="add-to-cart" onClick={() => removeProduct(product.id)}>Remove</button>
                          </div>
                          

                      </div>
                  ))
              )}
          </div>
      </div>
      </>
  );
};

export default Products;
