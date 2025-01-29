import { createContext, useContext, useState } from "react";
import { toast } from "sonner";

// creación del contexto
const PokemonContext = createContext();

// creación del proveedor del contexto
export function PokemonProvider({ children }) {
  // hook
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (pokemon) => {
    // verificamos si el pokemon ya está en favoritos
    if (favorites.some((poke) => poke.id === pokemon.id)) {
      toast.error("El Pokémon ya está en tus favoritos");
      return;
    }
    // si no está repetido lo agregamos
    setFavorites((preFavoritos) => [...preFavoritos, pokemon]);
    toast.success("Pokémon agregado a tus favoritos");
  };

  const removeFromFavorites = (pokemonId) => {
    setFavorites((preFavoritos) =>
      preFavoritos.filter((poke) => poke?.id !== pokemonId)
    );
    toast.success("Pokémon eliminado de tus favoritos");
  };

  return (
    <PokemonContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

// me creo un Hook personalizado para cargar el contexto
export const usePokemon = () => {
  // para usar el contexto hacia:
  const context = useContext(PokemonContext);
  if (context === undefined) {
    throw new Error(
      "usePokemon debe estar dentro del proveedor PokemonProvider"
    );
  }
  return context;
};
