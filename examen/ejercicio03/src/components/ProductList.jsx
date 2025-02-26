import React, { useContext, useEffect, useState } from "react";
import { useProducts } from "../context/ProductsContext";

const ProductList = () => {
  const { products, loading, error } = useProducts();

  if (error) {
    return <div>Error al cargar los productos</div>;
  }

  if (loading) {
    return <div>Cargando productos...</div>;
  }
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Productos</h1>
      <ul className="space-y-2">
        {products.map((product, key) => (
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
