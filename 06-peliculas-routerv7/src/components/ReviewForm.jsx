import React, { useState } from "react";
import { useReviews } from "../contexts/ReviewContext";

const ReviewForm = ({ movieId }) => {
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const { addReview } = useReviews();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) return;

    addReview(movieId, { text: reviewText, rating });
    setReviewText("");
    setRating(0);
    setHover(0);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-gray-50 p-4 rounded-lg"
    >
      <div>
        <label className="block text-gray-700 mb-2">Puntuación</label>
        <div className="flex gap-1">
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
            return (
              <button
                type="button"
                key={starValue}
                onClick={() => setRating(starValue)}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(rating)}
                className={`text-2xl cursor-pointer transition-colors ${
                  starValue <= (hover || rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              >
                ★
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Tu reseña</label>
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows="4"
          required
          placeholder="Escribe tu opinión sobre la película..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={rating === 0}
        className={`px-4 py-2 cursor-pointer hover:bg-gray-400 rounded transition-colors ${
          rating === 0
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
      >
        Publicar reseña
      </button>
    </form>
  );
};

export default ReviewForm;
