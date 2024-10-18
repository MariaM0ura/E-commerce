import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroBanner = ({ product, bannerData }) => {
    const [currentProductIndex, setCurrentProductIndex] = useState(0); // Estado para armazenar o índice atual do produto

    const filteredProducts = product ? product.filter(p => [ 1, 3, 10].includes(p.id)) : [];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentProductIndex((prevIndex) => (prevIndex + 1) % filteredProducts.length); // Alterna entre os produtos filtrados
        }, 6000); 

        return () => clearInterval(intervalId); 
    }, [filteredProducts]);

    const selectedProduct = filteredProducts[currentProductIndex]; 

    if (!selectedProduct) {
        return <div>Produto não encontrado</div>; 
    }

    return (
        <div className='hero-banner-container'>
            <div>
                <p className='beats-solo'>Summer Sale</p>
                <h3>{selectedProduct.nome}</h3> {/* Exibe o nome do produto */}
                <h1>FINE</h1>
                <img src={selectedProduct.imagem} alt='hero-banner' className='hero-banner-image' />
                <div>
                    <Link to="/"> 
                        <button type='button'>Shop Now</button>
                    </Link>
                    <div className='desc'>
                        <h5>Description</h5>
                        <p>{selectedProduct.descricao}</p> {/* Exibe a descrição do produto */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroBanner;
