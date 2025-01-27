import { createContext, useContext, useState } from "react";

const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (pokemon) => {
    // Verificar que el pokemon ya esta en favoritos
    if (favorites.some((p) => p.id === pokemon.id)) {
      return;
    }
  };
  setFavorites((prevFavoritos) => [...prevFavoritos, pokemon]);

  const removeFromFavorites = (pokemonId) => {};

  return (
    <PokemonContext.Provider addToFavorites={addToFavorites} value={{}}>
      {children}
    </PokemonContext.Provider>
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
