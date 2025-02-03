import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("token") != null;

  const handleLogin = () => {
    localStorage.setItem("token", JSON.stringify("login"));
    navigate("/profile");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-8">Bienvenido al Inicio</h1>
        {isAuth ? (
          <button
            onClick={handleLogout}
            className="bg-blue-500 text-white font-bold rounded px-4 py-2 hover:bg-blue-600 cursor-pointer"
          >
            Cerrar Sesión
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white font-bold rounded px-4 py-2 hover:bg-blue-600 cursor-pointer"
          >
            Iniciar Sesión
          </button>
        )}
      </div>
    </>
  );
};

export default Home;
