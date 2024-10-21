import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { useStateContext } from '../context/StateContext';
import { Cart } from './index';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const { isAuthenticated, logout } = useContext(AuthContext); 
  // console.log('esta logado: ', isAuthenticated); 

  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link to='/'>E-commerce</Link>
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div>
          <button
            type='button'
            className='cart-icon'
            onClick={() => setShowCart(true)}
            aria-label="Open Cart"
          >
            <AiOutlineShoppingCart />
            <span className='cart-item-qty'>{totalQuantities}</span> {/* Atualiza para mostrar a quantidade total */}
          </button>

          {showCart && <Cart />}
        </div>
        
        {/* Alterar entre Login e Logout baseado na autenticação */}
        <div>
          {isAuthenticated ? (
            <button onClick={logout} aria-label="Logout">
              <AiOutlineLogout className='cart-icon' /> {/* Ícone de Logout */}
            </button>
          ) : (
            <Link to='/login' aria-label="Login">
              <AiOutlineLogin className='cart-icon' /> {/* Ícone de Login */}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
