import React, { useRef, useContext} from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';
import { useStateContext } from '../context/StateContext';
import AuthContext from '../context/AuthContext'; 

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext();
  const { isAuthenticated } = useContext(AuthContext); 
  const navigate = useNavigate();

  const handleCheckout = () => {
    if(!isAuthenticated){
      toast.error('Você precisa estar logado para finalizar a compra.');
      navigate('/login');
    } else{
      console.log('tem que ir para o checkout');
      toast.success('Redirecionando pagina...');
      navigate('/sucess');
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
            Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
