import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import GlobalStyle from '../styles/globals';

const ProductCard = ({ product, onAdd }) => {
    const [qty, setQty] = useState(1); // Estado para controlar a quantidade

    if (!product) {
        return <div>Loading...</div>; // Mensagem de carregamento
    }

    const handleBuyNow = () => {
        onAdd(product, qty); // Chama onAdd ao clicar em "Buy Now"
    }

    const decQty = () => {
        setQty((prevQty) => Math.max(prevQty - 1, 1)); // Diminui a quantidade com mínimo de 1
    };

    const incQty = () => {
        setQty((prevQty) => prevQty + 1); // Aumenta a quantidade
    };

    return (
        <>
            <GlobalStyle />
            <div className="product-detail-container">
                <div>
                    <div className="image-container">
                        <img src={product.imagem} alt={product.nome} className="product-detail-image" />
                    </div>
                    <div className="small-images-container">
                        {/* Aqui você pode adicionar imagens menores, se necessário */}
                    </div>
                </div>

                <div className="product-detail-desc">
                    <h1>{product.nome}</h1>
                    <div className="reviews">
                        <div>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p>(29)</p>
                    </div>
                    <h4>Details</h4>
                    <p>{product.descricao}</p>
                    <p className="price">${product.preco}</p>
                <div className="quantity">
                    <h3>Quantity:</h3>
                    <p className="quantity-desc">
                        <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
                        <span className="num">{qty}</span>
                        <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
                    </p>
                </div>
                <div className="buttons">
                    <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>Add to Cart</button>
                    <button type="button" className="buy-now" onClick={handleBuyNow}>Buy Now</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default ProductCard;
