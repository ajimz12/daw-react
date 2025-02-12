import React from "react";
import { useFetch } from "../hooks/useFetch";
import { getPopularMovies } from "../services/tmdb";
import { useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(
    () => getPopularMovies(page),
    [page]
  );

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-2xl font-bold text-red-500">
          Error al cargar las peliculas {error}
        </p>
        <Link to="/" className="bg-blue-500 text-white rounded">
          Volver
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-sky-950">
          Bienvenido al Videoclub
        </h1>
        <p className="mt-4 text-gray-800"></p>
      </header>
      <section>
        <h2 className="text-2xl font-bold text-sky-900">Peliculas populares</h2>
        {loading ? (
          <div className="">Cargando...</div>
        ) : (
          <>
            {/* Grid para las peliculas */}
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {data?.results.map((movie) => (
                <MovieCard key={movie.id}></MovieCard>
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Home;
