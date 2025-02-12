import React from "react";
import { Link } from "react-router-dom";
import { getImageURL } from "../services/tmdb";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="group">
      <article className="card transform transition-transform duration-200 group-hover:scale-105">
        <div className="relative overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={getImageURL(movie.poster_path)}
            alt={movie.title}
          ></img>
          <div></div>
        </div>
      </article>
    </Link>
  );
};

export default MovieCard;
