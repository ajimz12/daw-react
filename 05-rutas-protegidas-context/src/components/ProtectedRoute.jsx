import React from "react";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, login, logout } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/" replace={true} />;
  }
  return children;
};

export default ProtectedRoute;
