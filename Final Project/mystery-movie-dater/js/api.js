// api.js

const TMDB_API_KEY = "YOUR_TMDB_API_KEY_HERE"; // <-- replace with your own key

export async function fetchMoviesByGenre(genreId) {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=${genreId}`;
  const res = await fetch(url);
  return res.json();
}

export async function fetchCityByIp() {
  // Simple free endpoint example
  const res = await fetch("https://ipapi.co/json/");
  return res.json();
}
