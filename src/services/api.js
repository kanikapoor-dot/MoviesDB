const API_KEY = "5cd0ca3a1bf389729d0b984275346cc7";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error(`Error fetching popular movies: ${response.statusText}`);
  }
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  if (!response.ok) {
    throw new Error(`Error searching movies: ${response.statusText}`);
  }
  const data = await response.json();
  return data.results;
};
