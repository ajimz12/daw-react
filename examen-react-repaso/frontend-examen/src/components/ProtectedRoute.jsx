import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();

  if (!token) {
    return (
      <>
        <div className="mb-5">Inicia sesion para acceder a esta funcion</div>
        <Link className="bg-purple-500 rounded-lg p-2 text-white" to="/login">
          Iniciar sesion
        </Link>
      </>
    );
  }

  return <div>{children}</div>;
};

export default ProtectedRoute;
