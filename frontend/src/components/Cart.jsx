import React, { useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';
import { useStateContext } from '../context/StateContext';
import AuthContext from '../context/AuthContext'; 
import axios from 'axios'; // Import axios to make API requests

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext();
  const { isAuthenticated, clienteId } = useContext(AuthContext); // Agora temos o clienteId
  const navigate = useNavigate();

  const handleCheckout = async () => {
    if (!isAuthenticated) {
      toast.error('Você precisa estar logado para finalizar a compra.');
      navigate('/login');
  } else {
      console.log('Cliente ID:', clienteId); // Agora deve imprimir o cliente ID correto
      try {
          const compraData = {
              cliente_id: clienteId, 
              produtos: cartItems.map(item => ({
                  id: item.id,
                  nome: item.nome,
                  preco: item.preco,
                  quantidade: item.quantity
              }))
          };

          console.log('Dados da compra:', compraData);
          
          const response = await axios.post('http://localhost:8800/product/:id', compraData);
          if (response.status === 200) {
              toast.success('Compra realizada com sucesso!');
              console.log('Compra realizada com sucesso:', response.data);
              navigate('/sucess');
          } else {
              toast.error('Erro ao realizar a compra.');
          }
      } catch (error) {
          console.error('Erro no processo de compra:', error);
          toast.error('Erro ao realizar a compra.');
      }
  }
};

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link to="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className="product" key={item.id}>
              <img src={item.imagem} className="cart-product-image" alt={item.nome} />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.nome}</h5>
                  <h4>${item.preco}</h4>
                </div>
                <div className="flex bottom">
                  <div>
                    <p className="quantity-desc">
                      <span className="minus" onClick={() => toggleCartItemQuantity(item.id, 'dec')}>
                        <AiOutlineMinus />
                      </span>
                      <span className="num">{item.quantity}</span>
                      <span className="plus" onClick={() => toggleCartItemQuantity(item.id, 'inc')}>
                        <AiOutlinePlus />
                      </span>
                    </p>
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>${totalPrice.toFixed(2)}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn" onClick={handleCheckout}>
              finalize purchase              
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
