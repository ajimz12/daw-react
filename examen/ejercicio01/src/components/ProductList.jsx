import React, { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const ProductList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchFromAPI = async (endpoint) => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}${endpoint}`);
      if (!response.ok) {
        throw new Error("Error en la petición");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFromAPI("/api/products");
  }, []);

  if (error) {
    return <div className="text-center">{error}</div>;
  }

  if (loading) {
    return <div className="text-center">Cargando...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Productos</h1>
      <ul className="space-y-2">
        {data.map((product, key) => (
          <li
            key={key}
            className="p-4 bg-white shadow rounded-lg w-1/4 border-1"
          >
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProductList;
