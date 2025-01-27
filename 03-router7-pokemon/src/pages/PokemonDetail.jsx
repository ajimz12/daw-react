import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetchPokemonDetail();
  }, []);

  const fetchPokemonDetail = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      setPokemon(data);
    } catch (error) {
      console.error("Error fetching Pokémon detail:", error);
    }
  };

  if (!pokemon) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="mb-4"
        />
      <h1 className="text-3xl font-bold mb-6 text-center">{pokemon.name}</h1>
      </div>
    </div>
  );
};

export default PokemonDetail;
