import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FooterBanner = ({ product }) => {
  const selectedProduct = product ? product.find(p => p.id === 4) : null;

  if (!selectedProduct) {
      return <div>Produto não encontrado</div>;  
  }


    if (!selectedProduct) {
        return <div>Produto não encontrado</div>; 
    }

    return (
        <div className='footer-banner-container'>
            <div className='banner-desc'>
                <div className='left'>
                    <p>20% OFF</p>
                    <h3>FINE</h3>
                    <h3>SMILE</h3>
                    <p>12 Nov to 7 Dec</p>
                </div>

                <div className='right'>
                    <p>Bets Solo Air</p>
                    <h3>Summer Sale</h3>
                    <p>Best headphones on the market</p>
                    <Link to={`/product/${selectedProduct.id}`}>
                        <button type='button'>Shop Now</button>
                    </Link>
                </div>
                    <img 
                        src={selectedProduct.imagem} 
                        alt={selectedProduct.nome} 
                        className="footer-banner-image"
                        width={600}
                        height={600}
                    />

            </div>
        </div>
    );
}

export default FooterBanner;
