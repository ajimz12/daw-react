import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleLogin = () => {
    login();
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
        <button
          onClick={handleLogin}
          className="w-full bg-sky-700 text-white rounded p-2 hover:bg-sky-800 cursor-pointer font-bold"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
