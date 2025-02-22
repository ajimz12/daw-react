import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { getPopularMovies } from "../services/tmdb";
import MovieCard from "../components/MovieCard";
import LoadingSpinner from "../components/loadingspinner";

const Home = () => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(
    () => getPopularMovies(page),
    [page]
  );

  const handlePageChange = (newPage) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPage(newPage);
  };

  return (
    <div className="space-y-8">
      <div className="text-center relative">
        <header>
          <h1 className="text-4xl font-bold text-sky-950">Videoclub</h1>
          <p className="mt-4 text-gray-800">
            Aquí podrás encontrar las películas más populares del momento
          </p>
        </header>
        <Link 
          to="/movies" 
          className="mt-6 inline-block px-6 py-2 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition-colors font-medium"
        >
          Ver catálogo completo →
        </Link>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <p className="text-center text-red-500">
          Error al cargar las películas
        </p>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-5">
            {data?.results?.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
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
              Página {page} de {data?.total_pages}
            </span>
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === data?.total_pages}
              className="px-4 py-2 bg-sky-700 text-white rounded disabled:opacity-50"
            >
              Siguiente
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
