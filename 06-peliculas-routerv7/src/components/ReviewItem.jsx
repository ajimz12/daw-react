import React from "react";
import { useReviews } from "../contexts/ReviewContext";

const ReviewItem = ({ review, movieId }) => {
  const { deleteReview } = useReviews();

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <div className="flex items-center">
            <span className="text-yellow-400 text-lg">
              {"⭐".repeat(review.rating)}
            </span>
          </div>

          <p className="text-gray-800">{review.text}</p>

          <p className="text-sm text-gray-500">
            Publicado el {formatDate(review.date)}
          </p>
        </div>

        <button
          onClick={() => deleteReview(movieId, review.id)}
          className="text-white bg-red-500 hover:bg-red-600 rounded-md cursor-pointer transition-colors p-2"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
