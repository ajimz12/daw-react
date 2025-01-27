import React, { useEffect, useState } from "react";

export const Search = () => {
  return (
    <>
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-6">Búsqueda</h2>
        <input
          placeholder="Buscar..."
          className="border-gray-600 p-2"
          type="search"
        ></input>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-md"
        >
          Buscar
        </button>
      </div>
    </>
  );
};

export default Search;
