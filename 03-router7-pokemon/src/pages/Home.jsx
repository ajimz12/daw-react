import React, { useEffect, useState } from "react";

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      const data = await response.json();
      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return res.json();
        })
      );
      setPokemons(pokemonDetails);
    } catch (error) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Pokemons</h1>
      <div className="grid grid-cols-3 gap-10">
        {pokemons.map((pokemon) => (
          <div
            key={pokemon.id}
            className="bg-white rounded-md p-6 hover:shadow-sm"
          >
            <div>
              <img
                className="mx-auto"
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
              />
              <h2 className="text-lg font-bold mt-4">{pokemon.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
