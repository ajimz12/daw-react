import React, { useState } from "react";
import SearchBox from "../components/SearchBox";
import MovieCard from "../components/MovieCard";
import { searchMovies } from "../services/tmdb";
import LoadingSpinner from "../components/loadingspinner";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (searchTerm) => {
    try {
      setLoading(true);
      setError(null);
      const data = await searchMovies(searchTerm);
      setMovies(data.results);
    } catch (err) {
      setError("Error al buscar películas");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-5">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-sky-950">Buscar Peliculas</h1>
        <p className="mt-4 text-gray-800">
          Buscar Peliculas por Titulo
        </p>
      </header>
      <div className="flex justify-center">
        <SearchBox onSearch={handleSearch} />
      </div>

      {error && <p className="text-red-500 text-center">{error}</p>}

      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-5">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
