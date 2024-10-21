import React from "react";
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Product from './Product';
import { useStateContext } from '../context/StateContext';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ProductCard = ({ product }) => {
    const [products, setProducts] = useState([]);

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

    const { qty, decQty, incQty, onAdd, setShowCart } = useStateContext(); 

    if (!product) {
        return <div>Loading...</div>; 
    }

    const handleBuyNow = () => {
        onAdd(product, qty); 
        setShowCart(true);
    }

    return (
        <>
            <div className="product-detail-container">
                <div>
                    <div className="">
                        <img src="https://via.placeholder.com/150/FFFFFF/FFFFFF" alt={product.nome} />
                        <img src="https://via.placeholder.com/150/FFFFFF/FFFFFF" alt={product.nome} />
                    </div>
                </div>
                <div>
                    <div className="image-container">
                        <img src={product.imagem} alt={product.nome} className="product-detail-image" />
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
                        <button type="button" className="add-to-cart" onClick={() => onAdd(product, 1)}>Add to Cart</button>
                        <button type="button" className="buy-now" onClick={handleBuyNow}>Buy Now</button>
                    </div>
                </div>
            </div>

            <div className="maylike-products-wrapper">
                <h2>You may also like</h2>
                <div className="marquee">
                    <div className="maylike-products-container track">
                        {Array.isArray(products) && products.length > 0 ? (
                        products.map((item) => ( 
                            <Product key={item.id} product={item} /> // Certifique-se de usar uma chave única
                        ))
                        ) : (
                        <p>No products available</p>)}
                    </div>
                 </div>
            </div>
        </>
    );
}

export default ProductCard;
