import React from "react";

const MovieCard = ({ movie }) => {
  const handleFavoriteClick = () => {
    // Logic to handle favorite click
    console.log(`${movie.title} added to favorites!`);
  };
  return (
    <div className="moviecard">
      <img src={movie.url} alt={movie.title} className="movie-image" />
      <h3 className="movie-title">{movie.title}</h3>
      <p className="movie-year">{movie.year}</p>
      <button className="favorite-button" onClick={handleFavoriteClick}>
        🤍
      </button>
    </div>
  );
};

export default MovieCard;
