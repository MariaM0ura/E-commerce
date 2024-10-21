import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import GlobalStyle from '../styles/globals';


const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <GlobalStyle />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
