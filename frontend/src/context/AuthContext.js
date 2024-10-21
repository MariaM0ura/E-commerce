import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const login = (token, adminStatus) => {
    setIsAuthenticated(true);
    setIsAdmin(adminStatus);
    localStorage.setItem('authToken', token);
    localStorage.setItem('adminStatus', adminStatus);

  };

  const logout = () => {
    setIsAuthenticated(false);
    setIsAdmin(false);  
    localStorage.removeItem('authToken');
    localStorage.removeItem('adminStatus');
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const adminStatus = localStorage.getItem('adminStatus') === 'true'; // Corrigido aqui
    if (token) {
        setIsAuthenticated(true);
        setIsAdmin(adminStatus);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
