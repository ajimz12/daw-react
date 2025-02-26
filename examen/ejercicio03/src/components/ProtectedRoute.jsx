import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  const navigate = useNavigate();

  if (!token) {
    navigate("/");
    return null; // no renderiza el componente si no hay token
  }
  return <div>{children}</div>;
};

export default ProtectedRoute;
