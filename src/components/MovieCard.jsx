import React from "react";
import "../css/MovieCard.css";

const MovieCard = ({ movie }) => {
  const handleFavoriteClick = () => {
    // Logic to handle favorite click
    console.log(`${movie.title} added to favorites!`);
  };

  const getPosterUrl = () => {
    if (movie.poster_path) {
      return `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    } else if (movie.backdrop_path) {
      return `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
    } else {
      return "/fallback_poster.jpeg"; // Fallback image
    }
  };

  return (
    <div className="movie-card">
      <div className="movie-button">
        <button className="favorite-button" onClick={handleFavoriteClick}>
          🤍
        </button>
      </div>
      <img
        src={getPosterUrl()}
        alt={movie.title}
        className="movie-image"
      />
      <div className="movie-info">
        <p className="movie-title">{movie.title}</p>
        <p className="movie-year">{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
