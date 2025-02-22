import React from "react";
import { useFavorites } from "../contexts/FavoritesContext";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";

const Favorites = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold text-sky-950 mb-4">Mis Favoritos</h1>
        <p className="text-gray-600 mb-6">No tienes películas favoritas aún</p>
        <Link
          to="/"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Explorar películas
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-sky-950">Mis Favoritos</h1>
        <p className="mt-4 text-gray-800">Tus películas favoritas</p>
      </header>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-5">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
