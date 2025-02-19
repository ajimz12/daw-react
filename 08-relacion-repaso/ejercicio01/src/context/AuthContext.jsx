import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // Verificar usuario logeado
  const [isLogin, setIsLogin] = useState(false);
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
        // const userInfo = JSON.parse(localStorage.getItem("user"));
        // setUser(userInfo);
        setIsLogin(true);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      i;
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
    // Verificar si el usuario está logeado
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, isLogin, error }}>
      {children}
    </AuthContext.Provider>
  );
};
