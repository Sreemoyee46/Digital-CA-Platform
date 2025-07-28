import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    // Dummy login logic: accept any username/password
    setUser({ username });
  };

  const logout = () => {
    setUser(null);
  };

  const signup = (username, password) => {
    // Dummy signup logic: just login the user
    setUser({ username });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
