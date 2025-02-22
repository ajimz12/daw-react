const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;
const BASE_IMAGE_URL = import.meta.env.VITE_BASE_IMAGE_URL;

// TAMAÑOS de las imágenes
export const SIZE = {
  POSTER: "w500",
  ORIGINAL: "original",
};

// Función para hacer fetch a la API URL, opciones
const fetchFromAPI = async (endpoint, options = {}) => {
  try {
    const response = await fetch(
      `${BASE_URL}${endpoint}?api_key=${API_KEY}&language=es-ES&${new URLSearchParams(
        options
      )}`
    );
    if (!response.ok) {
      throw new Error("Error en la petición");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPopularMovies = async (page) => {
  return await fetchFromAPI("/movie/popular", { page });
};

export const getMovieDetail = async (id) => {
  return await fetchFromAPI(`/movie/${id}`);
};

export const searchMovies = async (query, page = 1) => {
  return await fetchFromAPI("/search/movie", { query, page });
};

export const getMoviesByGenre = async (genreId, page = 1) => {
  return await fetchFromAPI("/discover/movie", {
    with_genres: genreId,
    page,
  });
};

export const getMoviesByYear = async (year, page = 1) => {
  return await fetchFromAPI("/discover/movie", {
    primary_release_year: year,
    page,
    sort_by: "popularity.desc",
    include_adult: false
  });
};

export const getGenres = async () => {
  return await fetchFromAPI("/genre/movie/list");
};

export const getImageURL = (path, size = SIZE.POSTER) => {
  return `${BASE_IMAGE_URL}/${size}${path}`;
};

export const getMovieVideos = async (id) => {
  return await fetchFromAPI(`/movie/${id}/videos`);
};
