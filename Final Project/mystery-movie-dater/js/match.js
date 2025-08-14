// match.js

import { fetchMoviesByGenre } from "./api.js";

document.getElementById("scheduleForm")?.addEventListener("submit", async e => {
  e.preventDefault();
  const date = document.getElementById("movieDate").value;
  const email = localStorage.getItem("mm_logged_in");
  const profile = JSON.parse(localStorage.getItem("mm_profile_" + email));
  const genreId = profile.genres[0] || 28;
  // Fetch a random movie from TMDB in chosen genre
  const movies = await fetchMoviesByGenre(genreId);
  const movie = movies.results[Math.floor(Math.random() * movies.results.length)];
  // Store the match
  const match = { date, movie, status: "scheduled" };
  let matches = JSON.parse(localStorage.getItem("mm_matches_" + email)) || [];
  matches.push(match);
  localStorage.setItem("mm_matches_" + email, JSON.stringify(matches));
  alert(`Scheduled "${movie.title}" for ${date}`);
});
