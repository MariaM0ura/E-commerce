import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (token) => {
    setIsAuthenticated(true);
    localStorage.setItem('authToken', token);
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('authToken');
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true); 
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
