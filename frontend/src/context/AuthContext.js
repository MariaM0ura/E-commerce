import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [clienteId, setClienteId] = useState(null); // Adiciona clienteId

  const login = (token, adminStatus, idCliente) => {
    setIsAuthenticated(true);
    setIsAdmin(adminStatus);
    setClienteId(idCliente); // Armazena o clienteId no estado
    localStorage.setItem('authToken', token);
    localStorage.setItem('adminStatus', adminStatus);
    localStorage.setItem('clienteId', idCliente); // Salva o clienteId no localStorage
  };

  const logout = () => {
    setIsAuthenticated(false);
    setIsAdmin(false);  
    setClienteId(null); // Limpa o clienteId ao deslogar
    localStorage.removeItem('authToken');
    localStorage.removeItem('adminStatus');
    localStorage.removeItem('clienteId'); // Remove o clienteId do localStorage
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const adminStatus = localStorage.getItem('adminStatus') === 'true';
    const idCliente = localStorage.getItem('clienteId'); // Recupera o clienteId do localStorage
    if (token) {
        setIsAuthenticated(true);
        setIsAdmin(adminStatus);
        setClienteId(idCliente); // Define o clienteId se o usuário estiver autenticado
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, isAdmin, clienteId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
