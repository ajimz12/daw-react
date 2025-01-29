import React from "react";
import { usePokemon } from "../context/PokemonContext";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes/paths";

export const Favorites = () => {
  const { favorites, removeFromFavorites } = usePokemon();

  if (favorites.length === 0) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h2 className="text-xl font-bold">No hay favoritos</h2>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-6">Tus Favoritos</h2>
        <Link
          className="text-blue-500 hover:text-blue-400 underline"
          to={ROUTES.HOME}
        >
          Volver al inicio
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {favorites.map((pokemon) => (
            <div
              key={pokemon.id} // id del pokemon
              className=" bg-white rounded-xl p-6 hover:shadow-md transition-all hover:translate-y-1"
            >
              <div className="relative group">
                <img
                  src={pokemon.sprites.other.dream_world.front_default}
                  alt={pokemon.name}
                  className="w-48 h-48 mx-auto"
                />
                <h2 className="text-xl font-bold text-center mt-4">
                  {pokemon.name}
                </h2>
                <div className="flex justify-center space-x-2 mt-4">
                  <button
                    onClick={() => {
                      removeFromFavorites(pokemon.id);
                    }}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-slate-900"
                  >
                    Quitar de favoritos
                  </button>
                  <Link
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-slate-900"
                    to={`${ROUTES.SEARCH}/${pokemon.name}`}
                  >
                    Ver Detalles
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Favorites;
