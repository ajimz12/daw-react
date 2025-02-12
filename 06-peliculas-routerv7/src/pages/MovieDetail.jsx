import React from "react";
import { Link, useParams } from "react-router-dom";
import { getImageURL, getMovieDetail, getMovieVideos } from "../services/tmdb";
import { useFetch } from "../hooks/useFetch";
import { PacmanLoader } from "react-spinners";

const MovieDetail = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(() => getMovieDetail(id), [id]);

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-2xl font-bold text-red-500">
          Error al cargar la pelicula {error}
        </p>
        <Link to="/" className="text-blue-500">
          Volver al inicio
        </Link>
      </div>
    );
  }

  console.log(data);
  return (
    <div>
      {loading ? (
        <PacmanLoader />
      ) : (
        <>
          <article className="max-w-4xl mx-auto">
            <header className="relative h-96 mb-8">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={getImageURL(data?.backdrop_path, "original")}
                alt={data?.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
                <div className="absolute bottom-0 text-white p-6">
                  <h1 className="text-4xl font-bold">{data?.title}</h1>
                </div>
              </div>
            </header>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <img
                  src={getImageURL(data?.poster_path)}
                  alt={data?.title}
                ></img>
              </div>
              <div className="flex gap-5">
                <div>
                  <span className="font-bold mt-4">
                    {data?.release_date.split("-")[0]}
                  </span>
                </div>
                <div>
                  <span className="font-bold mt-4">
                    ⭐{Number(data?.vote_average).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </article>
        </>
      )}
    </div>
  );
};

export default MovieDetail;

// Poster arriba que ocupe el ancho
// titulo
// Sinopsis
// Video (si lo tiene)
