import React from "react";
import { Link } from 'react-router-dom';

const Product = ({ product }) => { 
    return (
        <div>
            <Link to={`/product/${product.id}`}>
                <div className="product-card">
                    <img
                        src={product.imagem}
                        alt={product.nome}
                        width={250}
                        height={250}
                        className="product-image"
                    />
                    <p className="product-name">{product.nome}</p>
                    <p className="product-price">R$ {product.preco}</p>
                </div>
            </Link>
        </div>
    );
}

export default Product;
