import React, { useState } from "react";
import {
  getPopularMovies,
  getMoviesByGenre,
  getMoviesByYear,
  getGenres,
} from "../services/tmdb";
import MovieCard from "../components/MovieCard";
import { useFetch } from "../hooks/useFetch";

const MovieList = () => {
  const [filter, setFilter] = useState("popular");
  const [year, setYear] = useState(2025);
  const [genre, setGenre] = useState(28);
  const [page, setPage] = useState(1);

  // Fetch de películas según el filtro seleccionado
  const { data: movies, loading: loadingMovies, error: errorMovies } = useFetch(
    () => {
      switch (filter) {
        case "year":
          return getMoviesByYear(year, page);
        case "genre":
          return getMoviesByGenre(genre, page);
        default:
          return getPopularMovies(page);
      }
    },
    [filter, year, genre, page] 
  );

  // Fetch de géneros
  const { data: genres, loading: loadingGenres } = useFetch(getGenres, []);

  const handlePageChange = (newPage) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPage(newPage);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-sky-950 mb-6">
          Catálogo de Películas
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {["popular", "year", "genre"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-6 py-2 rounded-full font-medium transition-all cursor-pointer ${
                filter === type
                  ? "bg-sky-600 text-white shadow-lg scale-105"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {type === "popular" ? "🔥 Populares" : type === "year" ? "📅 Por Año" : "🎭 Por Género"}
            </button>
          ))}
        </div>

        {filter === "year" && (
          <select
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          >
            <option value="">Selecciona un año</option>
            {Array.from({ length: 138 }, (_, i) => 2025 - i).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        )}

        {filter === "genre" && !loadingGenres && genres && (
          <select
            onChange={(e) => setGenre(Number(e.target.value))}
            value={genre}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          >
            {genres.genres.map((g) => (
              <option key={g.id} value={g.id}>
                {g.name}
              </option>
            ))}
          </select>
        )}
      </div>

      {loadingMovies && <p className="text-center text-gray-500">Cargando películas...</p>}
      {errorMovies && <p className="text-center text-red-500">Error: {errorMovies}</p>}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {movies?.results?.map((movie) => (
          <div key={movie.id} className="transform hover:scale-105 transition-transform">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 pb-8">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 bg-sky-700 text-white rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <span className="py-2">
          Página {page} de {movies?.total_pages}
        </span>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === movies?.total_pages}
          className="px-4 py-2 bg-sky-700 text-white rounded disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default MovieList;
