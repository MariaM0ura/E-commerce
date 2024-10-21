import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineLogin, AiOutlineLogout, AiOutlineEdit, AiOutlineAreaChart } from "react-icons/ai";
import { useStateContext } from '../context/StateContext';
import { Cart} from './index';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const { isAuthenticated, isAdmin, logout } = useContext(AuthContext); 
  console.log('Usuário está logado:', isAuthenticated, 'Administrador:', isAdmin);
  const navigate = useNavigate();

  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link to='/'>E-commerce</Link>
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        {!isAdmin && (
          <div>
            <button
              type='button'
              className='cart-icon'
              onClick={() => setShowCart(true)}
              aria-label="Open Cart"
            >
              <AiOutlineShoppingCart />
              <span className='cart-item-qty'>{totalQuantities}</span>
            </button>

            {showCart && <Cart />}
          </div>
        )}

        {isAdmin && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button
              type='button'
              className='cart-icon'
              onClick={() => navigate('/admin/dashboard')}
              aria-label="Dashboard"
            >
              <AiOutlineAreaChart size={40}/>
            </button>
            <button
              type='button'
              className='cart-icon'
              onClick={() => navigate('/admin/products')}
              aria-label="Add Produto"
            >
              <AiOutlineEdit size={32}/>
            </button>
          </div>
        )}
        
        <div>
          {isAuthenticated ? (
            <button onClick={() => {
              logout();
              navigate('/login');}} aria-label="Logout">
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
