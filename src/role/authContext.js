import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({
  userRole: "",
  login: () => {},
  logout: () => {},
  token: "",
});

export const AuthProvider = ({ children }) => {
  const [userRole, setUserRole] = useState("");
  const [token, setToken] = useState("");

  const login = (userName, password) => {
    if (userName === "admin" && password === "Test@12345") {
      setUserRole("admin");
      setToken("your-token-here"); 
      return { role: "admin", token: "your-token-here" };
    } else if (userName === "user" && password === "Test@12345") {
      setUserRole("user");
      setToken("your-token-here"); 
      return { role: "user", token: "your-token-here" };
    } else {
      return null;
    }
  };

  const logout = () => {
    setUserRole("");
    setToken("");
  };

  return (
    <AuthContext.Provider value={{ userRole, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
