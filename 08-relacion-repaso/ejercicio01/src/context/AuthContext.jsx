import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // Verificar usuario logeado
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // Cargando
  const [isLoading, setIsLoading] = useState(true);
  // Error
  const [error, setError] = useState(null);

  useEffect(() => {
    checkAuth();
  }, []);

  // Comprobar localStorage para ver si el usuario existe
  const checkAuth = () => {
    try {
      const user = localStorage.getItem("user");
      if (user) {
        // // Decodificar token
        const userInfo = JSON.parse(localStorage.getItem("user"));
        setUser(userInfo);
        setIsAuthenticated(true);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      i;
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoading, isAuthenticated, error, checkAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};
