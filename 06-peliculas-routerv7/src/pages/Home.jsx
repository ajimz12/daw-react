import React, { useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { useFetch } from "../hooks/useFetch";
import { getPopularMovies } from "../services/tmdb";
import { PacmanLoader } from "react-spinners";
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

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-2xl font-bold text-red-500">
          Error al cargar las películas {error}
        </p>
        <Link to="/" className="text-blue-500">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-sky-950">Videoclub</h1>
        <p className="mt-4 text-gray-800">
          Aquí podrás encontrar las películas más populares del momento
        </p>
      </header>
      {/* sección de las películas */}
      <section>
        <h2 className="text-2xl font-bold text-sky-900 mb-5 ml-7">
          Películas populares
        </h2>
        {loading ? (
          <PacmanLoader color="#1c1616" />
        ) : (
          <>
            {/* Grid para las películas */}
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-5">
              {data?.results?.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
            {/* Paginación */}
            <div className="flex justify-center gap-2 mb-10 mt-10">
              <button
                onClick={() => handlePageChange(page - 1)}
                disable={page === 1}
                className="bg-sky-700 p-2 rounded text-white cursor-pointer"
              >
                Anterior
              </button>
              <span>
                Página {data?.page} de {data?.total_pages}
              </span>
              <button
                onClick={() => handlePageChange(page + 1)}
                disable={page === 1}
                className="bg-sky-700 p-2 rounded text-white cursor-pointer"
              >
                Siguiente
              </button>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Home;
