import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const Search = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {}, [search]); // TODO busqueda por nombre en input

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`
      );
      if (!response.ok) {
        toast.error("Error al buscar el pokemon", {
          style: {
            backgroundColor: "red",
            color: "white",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
            fontWeight: "bold",
          },
          icon: "❎",
        });
        return;
      }
      // const data = await response.json();
      navigate(`/search/${search.toLowerCase()}`);
    } catch (error) {
      toast.error("Error al buscar el pokemon", {
        style: {
          backgroundColor: "red",
          color: "white",
          borderRadius: "5px",
          padding: "15px",
          marginBottom: "10px",
          fontWeight: "bold",
        },
        icon: "❎",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl text-center font-bold mb-6">
            Buscar Pokémon
          </h2>
          <div className="flex gap-2">
            <input
              placeholder="Buscar..."
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              className="flex-1 p-2 border border-gray-200 rounded-lg focus:ring-rose-500"
              type="search"
            ></input>
            <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-md">
              Buscar
            </button>
          </div>
        </form>
        {/* TODO Mostrar tarjetas de pokemons introducidos en el input (nombre) */}
        <div className="grid grid-cols-1 gap-4">
          {pokemons.map((pokemon) => (
            <div
              key={pokemon.id}
              className="flex bg-white rounded-xl p-6 hover:shadow-sm"
            >
              <h3 className="text-xl font-bold">{pokemon.name}</h3>
              <div className="flex justify-center space-x-2 mt-4">
                <button
                  onClick={() => {
                    addToFavorites(pokemon);
                  }}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-slate-900"
                >
                  Añadir a favoritos
                </button>
                {/* voy a ir a ver los detalles usando elementos de react router */}
                <Link
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-slate-900"
                  to={`${ROUTES.SEARCH}/${pokemon.name}`}
                >
                  Ver Detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
