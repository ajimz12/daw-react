const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;
const BASE_IMAGE_URL = import.meta.env.VITE_BASE_IMAGE;

// Tamaño de imagenes
export const SIZE = {
  POSTER: "w500",
  ORIGINAL: "original",
};

// Funcion de fetching a la API
const fetchFromAPI = async (endpoint, options = {}) => {
  try {
    const response = await fetch(
      `${BASE_URL}${endpoint}?api_key=${API_KEY}&language=es-ES`
    );

    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }

    const { results } = await response.json();
    return results;
  } catch (error) {
    throw error;
  }
};

export const getPopularMovies = async () => {
  return await fetchFromAPI("/movie/popular");
};

export const getMovieDetails = async (movieId) => {
  return await fetchFromAPI(`/movie/${movieId}`);
};

export const getMovieVideos = async (movieId) => {
  return await fetchFromAPI(`/movie/${movieId}/videos`);
};
