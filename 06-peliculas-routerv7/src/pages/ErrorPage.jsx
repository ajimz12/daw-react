import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        ¡Ups! Algo salió mal.
      </h2>
      <p className="text-gray-600 mb-6">
        La página que buscas no existe o ha ocurrido un error inesperado.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-sky-600 text-white rounded-lg text-lg font-medium hover:bg-sky-700 transition-all"
      >
         Volver al inicio
      </Link>
    </div>
  );
};

export default ErrorPage;
