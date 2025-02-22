import { createContext, useContext, useState, useEffect } from "react";

const ReviewContext = createContext();

export function ReviewProvider({ children }) {
  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem("movieReviews");
    return savedReviews ? JSON.parse(savedReviews) : {};
  });

  useEffect(() => {
    localStorage.setItem("movieReviews", JSON.stringify(reviews));
  }, [reviews]);

  const addReview = (movieId, review) => {
    const newReview = {
      id: Date.now(),
      text: review.text,
      rating: review.rating,
      date: new Date().toISOString(),
      movieId: movieId,
    };

    setReviews((prevReviews) => ({
      ...prevReviews,
      [movieId]: [...(prevReviews[movieId] || []), newReview],
    }));
  };

  const deleteReview = (movieId, reviewId) => {
    setReviews((prevReviews) => ({
      ...prevReviews,
      [movieId]: prevReviews[movieId].filter(
        (review) => review.id !== reviewId
      ),
    }));
  };
  const getMovieReviews = (movieId) => {
    if (movieId) {
      return reviews[movieId] || [];
    }
    return Object.entries(reviews).map(([movieId, movieReviews]) => ({
      movieId,
      reviews: movieReviews.sort((a, b) => new Date(a.date) - new Date(b.date)),
    }));
  };

  return (
    <ReviewContext.Provider
      value={{
        addReview,
        deleteReview,
        getMovieReviews,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
}

export function useReviews() {
  const context = useContext(ReviewContext);
  if (!context) {
    throw new Error("useReviews must be used within a ReviewProvider");
  }
  return context;
}
