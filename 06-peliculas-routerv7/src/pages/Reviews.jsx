import React from "react";
import { Link } from "react-router-dom";
import ReviewItem from "../components/ReviewItem";
import { getMovieDetail, getImageURL } from "../services/tmdb";
import { useReviews } from "../contexts/ReviewContext";
import { useFetch } from "../hooks/useFetch";
import LoadingSpinner from "../components/loadingspinner";

const Reviews = () => {
  const { getMovieReviews } = useReviews();

  // Fetch de detalles de películas con reseñas
  const { data: movieReviews, loading } = useFetch(async () => {
    const allReviews = getMovieReviews();

    const reviewsWithMovies = await Promise.all(
      allReviews.map(async ({ movieId, reviews }) => {
        try {
          const movieDetails = await getMovieDetail(movieId);
          return {
            movieId,
            movieTitle: movieDetails.title,
            moviePoster: movieDetails.poster_path,
            reviews: reviews.sort((a, b) => new Date(b.date) - new Date(a.date))
          };
        } catch (error) {
          console.error(`Error fetching movie ${movieId}:`, error);
          return null;
        }
      })
    );

    return reviewsWithMovies.filter((item) => item !== null);
  }, [getMovieReviews]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-sky-950 mb-8 text-center">
        Todas las Reseñas
      </h1>

      {movieReviews.length === 0 ? (
        <div className="text-center text-gray-600">
          <p className="mb-4">No hay reseñas todavía</p>
          <Link to="/movies" className="text-sky-600 hover:text-sky-700 underline">
            Explorar películas
          </Link>
        </div>
      ) : (
        <div className="space-y-8">
          {movieReviews.map(({ movieId, movieTitle, moviePoster, reviews }) => (
            <div key={movieId} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                {moviePoster && (
                  <img
                    src={getImageURL(moviePoster)}
                    alt={movieTitle}
                    className="w-16 h-24 object-cover rounded"
                  />
                )}
                <div>
                  <Link
                    to={`/movie/${movieId}`}
                    className="text-xl font-semibold text-sky-950 hover:text-sky-700"
                  >
                    {movieTitle}
                  </Link>
                  <p className="text-gray-600">
                    {reviews.length} reseña{reviews.length !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {reviews.map((review) => (
                  <ReviewItem key={review.id} review={review} movieId={movieId} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Reviews;
