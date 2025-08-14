// api.js

// Use your actual TMDB API key here
const TMDB_API_KEY = "2180c53afb3da2489c7058ba80e8a0a5";

// Fetch movies by TMDB genre ID
export async function fetchMoviesByGenre(genreId) {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=${genreId}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`TMDB API error: ${res.status}`);
  }

  return res.json();
}

// Optional: Fetch list of genres
export async function fetchGenres() {
  const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_API_KEY}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`TMDB API error: ${res.status}`);
  }

  return res.json();
}

// Example free IP-to-city API
export async function fetchCityByIp() {
  const res = await fetch("https://ipapi.co/json/");

  if (!res.ok) {
    throw new Error(`IP Location API error: ${res.status}`);
  }

  return res.json();
}