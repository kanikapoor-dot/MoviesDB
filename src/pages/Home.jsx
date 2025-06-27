import React from "react";
import { useState } from "react";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const movies = [
    {
      title: "John Wick",
      year: "2017",
      url: "https://example.com/john-wick.jpg",
    },
    {
      title: "The Matrix",
      year: "1999",
      url: "https://example.com/the-matrix.jpg",
    },
    {
      title: "Inception",
      year: "2010",
      url: "https://example.com/inception.jpg",
    },
    {
      title: "Interstellar",
      year: "2014",
      url: "https://example.com/interstellar.jpg",
    },
  ];

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery.trim() === "") {
      alert("Please enter a search query.");
      return;
    }
    console.log("Searching for:", searchQuery);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search Movies"
          className="search-input"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
