import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login"); // redirecciona a la pantalla de login al cerrar sesion
  };
  return (
    <>
      <div>Dashboard protegido</div>
      <button onClick={handleLogout}>Cerrar Sesion</button>
    </>
  );
};

export default Dashboard;
