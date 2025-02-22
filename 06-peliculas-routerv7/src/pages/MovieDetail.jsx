import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getImageURL, getMovieDetail, getMovieVideos } from "../services/tmdb";
import { useFetch } from "../hooks/useFetch";
import LoadingSpinner from "../components/loadingspinner";
import { useFavorites } from "../contexts/FavoritesContext";
import ReviewForm from "../components/ReviewForm";
import ReviewItem from "../components/ReviewItem";
import { useReviews } from "../contexts/reviewcontext";

const MovieDetail = () => {
  const { id } = useParams();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const { getMovieReviews } = useReviews();
  const favorite = isFavorite(Number(id));
  const reviews = getMovieReviews(Number(id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleFavoriteClick = () => {
    if (favorite) {
      removeFavorite(Number(id));
    } else {
      addFavorite(movieData);
    }
  };

  const {
    data: movieData,
    loading: movieLoading,
    error: movieError,
  } = useFetch(() => getMovieDetail(id), [id]);

  const { data: videoData } = useFetch(() => getMovieVideos(id), [id]);
  const trailerKey = videoData?.results.find(
    (video) => video.type === "Trailer"
  )?.key;

  if (movieError) {
    return (
      <div className="text-center">
        <h1>Error al cargar la pelicula</h1>
        <Link to="/" className="text-blue-500">
          Volver al inicio
        </Link>
      </div>
    );
  }
  return (
    <div>
      {movieLoading ? (
        <LoadingSpinner className="mx-auto mt-20" />
      ) : (
        <>
          <article className="max-w-4xl mx-auto">
            <header className="relative h-96 mb-8">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={getImageURL(movieData?.backdrop_path, "original")}
                alt={movieData?.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
                <div className="absolute bottom-0 p-6 w-full flex justify-between items-center">
                  <h1 className="text-4xl font-bold text-white">
                    {movieData?.title}
                  </h1>
                  <button
                    onClick={handleFavoriteClick}
                    className={`text-5xl transition-colors hover:scale-110 cursor-pointer ${
                      favorite ? "text-red-500" : "text-white"
                    }`}
                  >
                    ♥
                  </button>
                </div>
              </div>
            </header>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="space-y-4">
                <img
                  src={getImageURL(movieData?.poster_path)}
                  alt={movieData?.title}
                  className="rounded-lg shadow-md w-full"
                />

                <div className="space-y-3 p-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold">Año:</span>
                    <span>{movieData?.release_date.split("-")[0]}</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="font-bold">Duración:</span>
                    <span>{movieData?.runtime} minutos</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="font-bold">Calificación:</span>
                    <span>⭐{Number(movieData?.vote_average).toFixed(1)}</span>
                  </div>
                </div>
              </div>

              <div className="col-span-2 space-y-5">
                <div>
                  <h2 className="text-2xl font-bold mb-3">Sinopsis</h2>
                  <p>{movieData?.overview}</p>
                </div>

                <div>
                  <span className="font-bold mr-3">Géneros</span>
                  <ul className="inline-flex flex-wrap gap-2">
                    {movieData?.genres?.map((genre) => (
                      <li
                        key={genre.id}
                        className="bg-gray-200 px-2 py-1 rounded text-sm"
                      >
                        {genre.name}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  {trailerKey ? (
                    <iframe
                      width="100%"
                      height="315"
                      src={`https://www.youtube.com/embed/${trailerKey}`}
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <p className="italic text-gray-500">
                      No hay trailers disponibles.
                    </p>
                  )}
                </div>
              </div>
            </div>
            <section className="mt-8 space-y-6 mb-10">
              <h2 className="text-2xl font-bold mb-4">Reseñas</h2>

              <ReviewForm movieId={Number(id)} />

              <div className="space-y-4 mt-6">
                {reviews.length === 0 ? (
                  <p className="text-gray-500 italic">
                    No hay reseñas todavía. ¡Sé el primero en opinar!
                  </p>
                ) : (
                  reviews.map((review) => (
                    <ReviewItem
                      key={review.id}
                      review={review}
                      movieId={Number(id)}
                    />
                  ))
                )}
              </div>
            </section>
          </article>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
