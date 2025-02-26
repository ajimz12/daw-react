import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    password: "",
  });
  const { register } = useAuth();

  const handleRegister = (e) => {
    e.preventDefault();
    register(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <label>Nombre:</label>
        <input onChange={handleChange} type="text" name="nombre" required />
        <label>Contraseña:</label>
        <input
          onChange={handleChange}
          type="password"
          name="password"
          required
        />
        <button type="submit">Registrarse</button>
      </form>
    </>
  );
};

export default Register;
