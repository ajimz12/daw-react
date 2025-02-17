import React from "react";
import { Link, useParams } from "react-router-dom";
import { getImageURL, getMovieDetail, getMovieVideos } from "../services/tmdb";
import { useFetch } from "../hooks/useFetch";
import { PacmanLoader } from "react-spinners";

const MovieDetail = () => {
  const { id } = useParams();

  // Fetch datos de la película
  const { data: movieData, loading: movieLoading, error: movieError } = useFetch(
    () => getMovieDetail(id),
    [id]
  );

  // Fetch videos de la película
  const { data: videoData, loading: videoLoading, error: videoError } = useFetch(
    () => getMovieVideos(id),
    [id]
  );

  if (movieError || videoError) {
    return (
      <div className="text-center py-10">
        <p className="text-2xl font-bold text-red-500">
          Error al cargar la película: {movieError || videoError}
        </p>
        <Link to="/" className="text-blue-500">
          Volver al inicio
        </Link>
      </div>
    );
  }

  // Obtener el key del primer trailer disponible
  const trailerKey = videoData?.results.find((video) => video.type === "Trailer")?.key;

  return (
    <div>
      {movieLoading || videoLoading ? (
        <PacmanLoader className="mx-auto mt-20" />
      ) : (
        <>
          <article className="max-w-4xl mx-auto">
            {/* Header con imagen de fondo */}
            <header className="relative h-96 mb-8">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={getImageURL(movieData?.backdrop_path, "original")}
                alt={movieData?.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
                <div className="absolute bottom-0 text-white p-6">
                  <h1 className="text-4xl font-bold">{movieData?.title}</h1>
                </div>
              </div>
            </header>

            {/* Contenido principal */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Póster */}
              <div>
                <img
                  src={getImageURL(movieData?.poster_path)}
                  alt={movieData?.title}
                  className="rounded-lg shadow-md"
                />
              </div>

              {/* Detalles de la película */}
              <div className="col-span-2 space-y-4">
                <h2 className="text-2xl font-bold">Sinopsis</h2>
                <p>{movieData?.overview}</p>

                <div className="flex items-center space-x-2">
                  <span className="font-bold">Año</span>
                  <span>{movieData?.release_date.split("-")[0]}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="font-bold">Calificación</span>
                  <span>⭐{Number(movieData?.vote_average).toFixed(1)}</span>
                </div>

                <div>
                  <span className="font-bold mr-3">Géneros</span>
                  <ul className="inline-flex flex-wrap gap-2">
                    {movieData?.genres?.map((genre) => (
                      <li key={genre.id} className="bg-gray-200 px-2 py-1 rounded text-sm">
                        {genre.name}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Trailer */}
                <div className="mt-4">
                  {trailerKey ? (
                    <iframe
                      width="100%"
                      height="315"
                      src={`https://www.youtube.com/embed/${trailerKey}`}
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <p className="italic text-gray-500">No hay trailers disponibles.</p>
                  )}
                </div>
              </div>
            </div>

            {/* Sección Favoritos (sin funcionalidad aún) */}
            <section className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Favoritos</h2>
              <p className="italic text-gray-500">Funcionalidad no disponible aún.</p>
            </section>

            {/* Sección Reseñas (sin funcionalidad aún) */}
            <section className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Reseñas</h2>
              <p className="italic text-gray-500">Funcionalidad no disponible aún.</p>
            </section>
          </article>
        </>
      )}
    </div>
  );
};

export default MovieDetail;