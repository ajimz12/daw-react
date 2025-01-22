import { createContext, useContext, useState } from "react";

const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (pokemon) => {};

  const removeFromFavorites = (pokemonId) => {};

  return (
    <PokemonContext.Provider value={{}}>{children}</PokemonContext.Provider>
  );
}

// Hook personalizado para cargar el contexto
export const usePokemon = () => {
  const context = useContext(PokemonContext);
  if (context === undefined) {
    throw new Error("usePokemon debe ser usado dentro de un PokemonProvider");
  }
  return context;
};
