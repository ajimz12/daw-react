import { Link } from "react-router-dom";
import { getImageURL } from "../services/tmdb";
import { useFavorites } from "../contexts/FavoritesContext";
import { useToast } from "../contexts/ToastContext";

const MovieCard = ({ movie }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(movie.id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    if (favorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <Link to={`/movie/${movie.id}`} className="group">
      <article className="card transform transition-transform duration-200 group-hover:scale-105">
        <div className="relative aspect-[2/3]">
          <img
            src={getImageURL(movie?.poster_path)}
            alt={movie?.title}
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
          />

          <button
            onClick={handleFavoriteClick}
            className={`absolute top-2 left-4 text-3xl bg-black px-2 rounded-lg cursor-pointer transition-colors hover:scale-110 ${
              favorite ? "text-red-500" : "text-white"
            }`}
            title={favorite ? "Quitar de favoritos" : "Añadir a favoritos"}
          >
            ♥
          </button>

          <div className="absolute top-2 right-4 bg-black text-white px-2 py-2 rounded-lg">
            ⭐{Number(movie?.vote_average).toFixed(2)}
          </div>

          <div className="p-4">
            <h3 className="text-lg font-bold text-sky-900 text-center">
              {movie?.title}
            </h3>
            <p className="text-gray-600 text-center">
              {movie?.release_date?.split("-")[0]}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default MovieCard;
