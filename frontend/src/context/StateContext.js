import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  const onAdd = (product, quantity) => {
    const cleanProductId = typeof product.id === 'string' ? product.id.trim() : product.id;

    const existingProductIndex = cartItems.findIndex(item => {
        const cleanItemId = typeof item.id === 'string' ? item.id.trim() : item.id;
        return cleanItemId === cleanProductId;
    });

    console.log('existingProductIndex', existingProductIndex);
    console.log('cartItems', cartItems);
    console.log('product', product);
    console.log('id do produto', product.id);

    if (existingProductIndex >= 0) {
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingProductIndex].quantity += quantity;
        setCartItems(updatedCartItems);
    } else {
        const newProduct = { ...product, quantity };
        setCartItems(prevItems => [...prevItems, newProduct]);
    }

    setTotalPrice(prevTotal => prevTotal + product.preco * quantity);
    setTotalQuantities(prevQuantities => prevQuantities + quantity);
};


  const onRemove = (product) => {
    const foundProduct = cartItems.find((item) => item.id === product.id); // Corrigido para 'id'
    const newCartItems = cartItems.filter((item) => item.id !== product.id); // Corrigido para 'id'

    if (foundProduct) {
      setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.preco * foundProduct.quantity);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity);
      setCartItems(newCartItems);
    }
  };

  const toggleCartItemQuantity = (id, value) => {
    const foundProduct = cartItems.find((item) => item.id === id); // Corrigido para 'id'
    const newCartItems = cartItems.filter((item) => item.id !== id); // Corrigido para 'id'

    if (foundProduct) {
      if (value === 'inc') {
        setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 }]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.preco); // Corrigido para 'preco'
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
      } else if (value === 'dec') {
        if (foundProduct.quantity > 1) {
          setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 }]);
          setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.preco); // Corrigido para 'preco'
          setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
        }
      }
    }
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
