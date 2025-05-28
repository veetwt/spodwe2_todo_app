import React, { createContext, useState, useContext, useEffect } from 'react';

const authenticationContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
      setUser(null);
    }
  }, [token]);

  const login = (newToken, userData) => {
    setToken(newToken);
    if (userData) setUser(userData);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return (
    <authenticationContext.Provider value={{ token, user, login, logout, isAuthenticated: !!token }}>
      {children}
    </authenticationContext.Provider>
  );
};

export const useAuth = () => useContext(authenticationContext);
