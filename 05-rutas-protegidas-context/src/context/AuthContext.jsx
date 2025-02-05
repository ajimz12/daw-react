import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

// Crear contexto
const AuthContext = createContext();

// Crear Provider
export const AuthProvider = ({ children }) => {
  // Crear estado
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Hacer login si existe token en localStorage con valor "true"
  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("token", JSON.stringify(true));
  };

  // Hacer logout
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  };

  // Devolver Provider
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Exportar contexto con hook personalizado
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};
