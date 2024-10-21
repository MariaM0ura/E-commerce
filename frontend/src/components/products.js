import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Products = ({ product }) => {
    return (
        <>
            {product.map((product) => (
                <div key={product.id}> 
                    <h3>{product.nome}</h3>
                    <img src={product.imagem} alt={product.nome} width="100" /> 
                </div>
            ))}
        </>
    );
}

export default Products;
