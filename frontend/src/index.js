import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Layout from './components/Layout'; // Componente Layout
import { StateContext } from './context/StateContext'; // Contexto global
import { AuthProvider } from './context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <StateContext>
      <AuthProvider>
        <Layout>
          <App /> 
        </Layout>
      </AuthProvider>
    </StateContext>
  </BrowserRouter>
);
