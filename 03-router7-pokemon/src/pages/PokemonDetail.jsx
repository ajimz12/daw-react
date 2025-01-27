import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

export const PokemonDetail = () => {
  // Pokemon trae la data a traves de la funcionalidad de router-dom
  const pokemon = useLoaderData();
  const navigate = useNavigate(); // Hook para navegar entre rutas

  return (
    <>
      <div className="container mx-auto p-4 bg-gray-200">
        <div className="flex flex-col items-center">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="mb-4"
          />
          <h1 className="text-3xl font-bold mb-6 text-center">
            {pokemon.name}
          </h1>
          <div className="grid grid-cols-2 gap-5">
            <h3>Estadisticas</h3>
            {pokemon.stats.map((stat) => (
              <div key={stat.stat.name} className="mr-2 text-sm">
                <span>{stat.base_stat}</span> - {stat.stat.name}
              </div>
            ))}
            <h3>Tipos</h3>
            {pokemon.types.map((type) => (
              <div key={type.type.name} className="mr-2 text-sm">
                <span>{type.base_type}</span> - {type.type.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button className="bg-green-400 rounded-md p-4 text-white hover:bg-green-500 mt-5">
          Añadir a favoritos
        </button>

        <button
          onClick={() => navigate(-1)}
          className="bg-blue-400 p-4 rounded-md text-white hover:bg-blue-500"
        >
          Volver
        </button>
      </div>
    </>
  );
};

export default PokemonDetail;
